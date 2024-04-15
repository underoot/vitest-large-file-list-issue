# Large list of files bug in Vitest 1.5

If you launch Vitest browser with more than 127 files, Vitest prints error somewhere in the middle:
```
SyntaxError: Failed to construct 'WebSocket': The URL 'ws://localhost:undefined/' is invalid.
 ❯ setupWebSocket ../../../../@vite/client:509:20
 ❯ fallback ../../../../@vite/client:488:22
 ❯ WebSocket.<anonymous> ../../../../@vite/client:524:13


⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
SyntaxError: Failed to construct 'WebSocket': The URL 'ws://localhost:undefined/' is invalid.
 ❯ setupWebSocket ../../../../@vite/client:509:20
 ❯ fallback ../../../../@vite/client:488:22
 ❯ WebSocket.<anonymous> ../../../../@vite/client:524:13
```

If file parallelization disabled situation becomes even worse. You don't see any error for some time, Vitests stucks in the end and after a while you see error:
```
Error: Cannot connect to the server in 60 seconds
 ❯ ../../../../__vitest_browser__/rpc-slP7oy1q.js:551:16
```
