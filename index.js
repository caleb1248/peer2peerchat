var webserver = require("express")();
webserver.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
	res.end();
})
var ws = require("ws");
var WebSocketServer = ws.Server;
var wsserver = new WebSocketServer(
	{
		server : webserver
	}
);
