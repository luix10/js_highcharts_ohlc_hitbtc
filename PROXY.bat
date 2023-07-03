start cmd /k "node proxy.js"
start cmd /k "http-server"
timeout 5 && start msedge "http://127.0.0.1:8080"