const express = require('express');
const app = express();
const port = 3000;
require("./db.js");



app.get('/', (req,res) => {
	res.send("connected to app")
})

app.listen(port, function(){
	console.log(`listening on  ${port} `)
})
