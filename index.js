var webserver = require("express")();
webserver.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
	res.end();
});
webserver.get("/n.js",(req,res) => {
	res.sendFile(__dirname + "/n.js");
	res.end();
});
var ws = require("ws");
var wsserver = new ws.Server(
	{
		server : webserver,
		port : 8080
	}
);
wsserver.on("connection",socket => {
	console.log("connection");
	socket.on("message",(data) => {
		console.log(data);
	})
});
webserver.up
webserver.listen(80);