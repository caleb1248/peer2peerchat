const http = require("http");
const fs = require("fs");
const ws = require("ws");
var server = http.createServer((req, res) => {
    res.addHeader("Content-Type: text/html");
    fs.createReadStream("index.html").pipe(res);
    res.end();
});
var server = ws.Server(s => {
    s.on("connection", wsocket => {
        wsocket.on()
    })
}))
