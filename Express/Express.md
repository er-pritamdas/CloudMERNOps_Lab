Express 

- It is an open source framework developed and maintained by Node.js foudation
- Express was developed by TJ Holowaychuk
- To initialize a empty node : npm init

## How Express Actually Executes:
When the browser tries to reach a URL, it sends a raw HTTP GET request to the server for that path.
The server has already defined the route, stating that if a GET request comes to that path, it should execute the corresponding function.
When the browser sends the request, it does not send an object model like req. Instead, it sends a raw HTTP request (including method, URL, headers, etc.).
Express parses this raw request and creates the req object, which makes it easy to access things like query parameters, headers, and the request body.
Express has an internal routing table that continuously listens for incoming requests.
When the requested URL matches a defined route, Express executes the corresponding function, passing in the req and res objects.
The req object contains details about the request, and the res object is used to send a response back to the browser.
Based on the requested information, the server processes the request and sends the appropriate response using res.


Brief Summary of Our Discussion
How Express Handles Requests

The browser sends an HTTP request to a server (usually on port 80/443).
Express has a routing table that matches incoming requests to defined routes (e.g., app.get("/")).
When a match is found, Express executes the corresponding function and provides req (request details) and res (response handler).
Request (req) and Response (res) Objects

req contains details like headers, URL, body, method, etc.
res is used to send a response back (e.g., res.send() sends HTML/text).
Raw HTTP and Network Flow

The browser sends raw HTTP requests (text-based protocol).
The server processes the request and sends back a raw HTTP response.
The browser then renders the response as a webpage.
Ports and Communication

Browsers send requests to port 80 (HTTP) or 443 (HTTPS) by default.
If you run a server on port 3000, you must explicitly tell the browser to request http://localhost:3000.
The server doesn't know the client's port; it just responds to the incoming request.
🔥 Key Realization: The browser defaults to port 80/443, but if you run Express on 3000, you must specify it in the URL (e.g., localhost:3000).


##Tool From NPM
- Nodemon : This tool restarts our servers as soon as we make a change
-  