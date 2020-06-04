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
