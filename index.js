var express = require("express");
var fs = require("fs");
var server = express();
server.get("/",(_req,res) => {
	res.sendFile(__dirname + "/index.html");
});
server.get("/n.js",(req,res) => {
	res.sendFile(__dirname + "/n.js");
});

server.listen(80);