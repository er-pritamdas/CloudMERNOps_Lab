# High-Traffic API System with Rate Limiting – Architecture Design (Explained)

## 1. Problem Context

We’re designing a stateless API system that needs to handle unpredictable spikes in traffic – think lakhs (hundreds of thousands) of incoming requests in a short time window.

The challenges are:

1. **Third-party API constraints**

   * 1,000 requests per minute
   * 50,000 requests per hour
   * 500,000 requests per day

   → If we exceed these, the external API will block us.
2. **Database constraint**

   * PostgreSQL can only handle **100 active connections** at once
   * This is a hard cap, so we cannot solve this by just adding more servers
3. **Reliability requirement**

   * **Zero request failures** due to the above constraints
   * Every request must be accepted, even if we process it later

So, the design must:

* Absorb any traffic burst immediately
* Process at a safe, controlled rate without violating limits
* Prevent database overload
* Ensure high availability and observability

---

## 2. High-Level Architecture

The solution is built on a  **queue-based, asynchronous processing model** :

* **API servers** scale dynamically to handle incoming load
* **All requests are pushed into a message queue** immediately
* **Workers** pull jobs from the queue at a controlled pace
* **Redis rate limiter** ensures third-party API limits are never crossed
* **PgBouncer connection pooler** ensures DB connections never exceed 100
* **Monitoring/alerting** ensures visibility and quick reaction to issues

This guarantees:

* Every request is accepted (clients never see a failure due to rate limit or DB limits)
* Processing happens safely in the background
* Traffic spikes are absorbed by the queue, not by the workers

---

## 3. Request Lifecycle

Let’s walk through what happens step by step:

1. **Client sends a request**

   → Load Balancer distributes it across API servers
2. **API server validation**

   → Checks authentication, basic validation

   → Pushes the request into the **message queue**
3. **Immediate acknowledgment**

   → API responds `202 Accepted` + Job ID

   → This keeps the API stateless and fast
4. **Asynchronous processing**

   * Workers pull jobs from the queue
   * Redis rate limiter checks if we’re within minute/hour/day API limits
   * If allowed, worker proceeds
   * Worker fetches a DB connection from PgBouncer (max 100 connections shared)
   * Worker calls the external API (Gemini)
   * Worker writes results into DB
   * Worker updates job status in Redis
5. **Client polls for result** (optional)

   → Clients can check job status via the Job ID

This flow ensures **instant intake** but  **controlled processing** .

---

## 4. Key System Components & Why They’re Used

### a. Load Balancer

* Distributes requests across API servers
* Handles SSL termination, health checks, routing

### b. API Gateway

* Entry point for requests
* Provides auth, per-client throttling, request validation
* Offloads cross-cutting concerns from application servers

### c. API Servers (Auto-Scaling)

* Stateless, lightweight, only responsible for validating + queueing requests
* Auto-scales from 2 → 50 instances depending on queue depth or CPU
* Responds with `202 Accepted` (so client doesn’t wait for full processing)

### d. Message Queue (SQS/RabbitMQ/Kafka)

* The **most critical component** – absorbs traffic bursts
* Guarantees no request loss (persistence, retries, DLQ)
* Provides natural backpressure

### e. Worker Pool (Fixed Size)

* ~15-20 workers, **fixed** (cannot scale arbitrarily, otherwise we’d break rate limits)
* Controlled processing rate: ~900 requests/min (90% of limit, leaving buffer)
* Each worker pulls, checks rate limit, calls external API, updates DB

### f. Redis (Rate Limiter + Caching)

* Distributed rate limiting using **token bucket** algorithm
* Ensures compliance with API limits (minute, hour, day windows)
* Also stores job statuses for fast client polling

### g. Database + PgBouncer

* PostgreSQL with **PgBouncer connection pooler**
* Strictly enforces 100 active connections
* Transaction pooling mode – releases connections instantly after queries
* Prevents exhaustion under heavy load

### h. Monitoring & Logging

* Prometheus + Grafana → metrics (queue depth, worker throughput, DB usage, rate limits)
* ELK/CloudWatch → logs
* PagerDuty → alerts for anomalies

---

## 5. How the System Handles Spikes

**Scenario: 5 Lakh requests in 10 minutes**

1. **Intake (seconds)**
   * API servers auto-scale to ~30
   * All requests queued in ~30 seconds
   * Clients immediately get `202 Accepted`
2. **Processing (hours)**
   * Workers steadily process ~900 requests/min
   * Total 5 lakh requests take ~9 hours to complete
   * No rate limit violations, no DB overload
3. **Scale-down**
   * Once queue drains, API servers reduce back to 2
   * Workers continue fixed rate processing
   * Cost-efficient + stable

---

## 6. Rate Limiting Strategy

Implemented using **Redis token bucket** with three tiers:

* Per-minute: 1,000 tokens
* Per-hour: 50,000 tokens
* Per-day: 500,000 tokens

Each worker checks Redis before proceeding. If tokens unavailable:

* Job is requeued with backoff
* Prevents accidental limit breaches

We target **90% utilization** (buffer for retries, clock skew, bursts):

* 900 req/min
* 45,000 req/hour
* 450,000 req/day

---

## 7. Database Connection Management

PostgreSQL is the biggest bottleneck – only **100 active connections** allowed.

Solution: **PgBouncer** in transaction pooling mode.

* Workers don’t connect directly → they go via PgBouncer
* PgBouncer efficiently reuses connections
* 500+ workers could theoretically run with just 100 DB connections
* Connections are released immediately after each query

This prevents overload while maximizing throughput.

---

## 8. Scaling Approach

* **API Servers** : Auto-scale (2–50) → scale based on queue depth & CPU
* **Workers** : Fixed (15–20) → designed around rate limits, not traffic
* **Queue** : Scales naturally → can hold millions of pending requests

This separation ensures:

* **Elastic intake** (API servers)
* **Controlled processing** (workers)

---

## 9. Reliability & Fault Tolerance

* **High availability** across multiple zones
* **Dead Letter Queue** for failed jobs
* **Retries with exponential backoff** (5 min, 15 min, then DLQ)
* **Circuit breaker** to stop hammering a failing external API
* **Graceful degradation** (return wait times, cache stale data if needed)

---

## 10. Testing & Monitoring

* **Load testing** with tools like k6/JMeter → simulate 100K+ requests
* **Chaos testing** → random spikes, worker crashes, DB slowdowns
* **Dashboards** for queue depth, rate limit usage, DB utilization, worker errors

---

## 11. Key Takeaways

* **Queue-first design** ensures no traffic spike overwhelms workers or DB
* **Fixed worker pool** ensures we never break API rate limits
* **PgBouncer** solves hard DB connection cap
* **Asynchronous processing** keeps user experience smooth (instant 202 Accepted)
* **Monitoring & alerting** provide visibility and resilience

---

## 12. Why This Design Works for the Interview

This architecture demonstrates:

* **Practical trade-off awareness** (rate limits, DB caps, cost vs performance)
* **End-to-end thinking** (intake → processing → scaling → resilience → monitoring)
* **Production readiness** (alerts, retries, DLQ, caching, security)
* **Scalable and safe system** that doesn’t just handle load, but does so **gracefully**
