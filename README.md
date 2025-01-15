# Node.js Server Hang: Missing res.end()

This repository demonstrates a common error in Node.js where a server hangs because the response object's `res.end()` method is missing in the request handler.  This leads to open connections that are never closed, resulting in performance degradation and potential server crashes.

The `bug.js` file showcases the problematic code. The `bugSolution.js` file provides the corrected code with the necessary `res.end()` call.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Make a request to the server (e.g., using `curl`).
4. Observe that the server does not respond and potentially hangs.
5. Run `node bugSolution.js` to see the corrected behavior.