var http = require("http");
var fs = require("fs");
var server = http.createServer((req, res) => {
    res.addHeader("Content-Type: text/html");
    fs.createReadStream("index.html").pipe(res);
    res.end();
})
