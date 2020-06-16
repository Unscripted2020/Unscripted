<<<<<<< HEAD
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/unscripted"
=======
require("dotenv").config() 
const mongoose = require('mongoose');
const url = process.env.MONGODBURL
>>>>>>> aaf0acf3c472674057fc9eac32ec3ee7f885640c

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  salt: String, // add extra security to password,
  hash: String // a password hash
});


mongoose.model('User', User);

//connect db
<<<<<<< HEAD
mongoose.connect(url,{
=======
mongoose.connect(process.env.MONGODB_URI || url, {
>>>>>>> aaf0acf3c472674057fc9eac32ec3ee7f885640c
	useNewUrlParser: "true",
	useUnifiedTopology: "true",
})
.then(() => console.log(`connected to database: ${url}`))
.catch(err =>{
	console.log(err)
});
