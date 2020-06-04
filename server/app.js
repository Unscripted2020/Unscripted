const express = require('express');
const app = express();
const port = 7000;
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/unscripted"

mongoose.connect(url,{
	useNewUrlParser: "true",
	useUnifiedTopology: "true",
})
.then(() => console.log(`connected to database: ${url}`))
.catch(err =>{
	console.log(err)
});

app.get('/', (req,res) => {
	res.send("connected to app")
})

app.listen(port, function(){
	console.log(`listening on  ${port} `)
})