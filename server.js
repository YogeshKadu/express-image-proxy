const express = require("express");
// var http = require('http');
var request = require('request');
// const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
app.use(cors());
app.get('/*',async(req, res) => {
	console.log(req.params["0"]);
	// res.json(req.params);
	request.get(req.params["0"]).pipe(res);
});
app.get('/',async(req, res) => {
	res.send("Hello");
});

app.listen(process.env.PORT||3200,()=> {
	console.log("working");
})