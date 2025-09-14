# 🚀 Step 1: Install Prerequisites

Install KIND and kubectl using the script "install.sh"

# 🚀 Step 2: Create a Cluster

1. Create a  **default single-node cluster** :

   <pre class="overflow-visible!" data-start="968" data-end="1022"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>kind create cluster --name mycluster
   </span></span></code></div></div></pre>

   🔹 This will spin up **one Docker container** → acting as both master + worker.

   🔹 Check nodes:

   <pre class="overflow-visible!" data-start="1131" data-end="1166"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>kubectl get nodes
   </span></span></code></div></div></pre>
2. Create a **multi-node cluster** (1 master, 2 workers):

   * Create a config file:
     <pre class="overflow-visible!" data-start="1260" data-end="1444"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-yaml"><span><span># kind-config.yaml</span><span>
     </span><span>kind:</span><span></span><span>Cluster</span><span>
     </span><span>apiVersion:</span><span></span><span>kind.x-k8s.io/v1alpha4</span><span>
     </span><span>nodes:</span><span>
       </span><span>-</span><span></span><span>role:</span><span></span><span>control-plane</span><span>
       </span><span>-</span><span></span><span>role:</span><span></span><span>worker</span><span>
       </span><span>-</span><span></span><span>role:</span><span></span><span>worker</span><span>
     </span></span></code></div></div></pre>
   * Run:
     <pre class="overflow-visible!" data-start="1460" data-end="1544"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>kind create cluster --name mycluster --config kind-config.yaml
     </span></span></code></div></div></pre>

   🔹 This will spin up **3 Docker containers** (1 master, 2 workers).

---

# 🚀 Step 3: Verify

* Check Docker containers (nodes):

  <pre class="overflow-visible!" data-start="1682" data-end="1707"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker ps
  </span></span></code></div></div></pre>

  You’ll see containers like:

  <pre class="overflow-visible!" data-start="1740" data-end="1799"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>kind-control-plane
  kind-worker
  kind-worker2
  </span></span></code></div></div></pre>
* Check Kubernetes nodes:

  <pre class="overflow-visible!" data-start="1829" data-end="1870"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>kubectl get nodes -o wide
  </span></span></code></div></div></pre>
* Deploy a test Pod:

  <pre class="overflow-visible!" data-start="1895" data-end="1979"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>kubectl run nginx --image=nginx --port=80
  kubectl get pods -o wide
  </span></span></code></div></div></pre>

---

# 🚀 Step 4: Delete Cluster

<pre class="overflow-visible!" data-start="2014" data-end="2062"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>kind delete cluster --name mycluster
</span></span></code></div></div></pre>
