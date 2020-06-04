const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/unscripted"

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
mongoose.connect(url,{
	useNewUrlParser: "true",
	useUnifiedTopology: "true",
})
.then(() => console.log(`connected to database: ${url}`))
.catch(err =>{
	console.log(err)
});
