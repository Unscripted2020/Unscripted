const express = require('express');
const app = express();
const port = 3000;
//db
const mongoose = require('mongoose');
require("./db.js");//call connection to db and load models
const User = mongoose.model('User');
//pswd hash
var hash =require('pbkdf2-password')()

app.get('/', (req,res) => {
	res.send("connected to app")
})

app.post('/create-account', (req, res) => {
	const username = "username";
	const password  = "password";
	const confirmPassword = "password";
	let err = "";
	User.find({username: username}, (issue, users)=>{
    if(users[0]){
			err = "Username exists";
			res.status(200).json({error: err});
		}
		//new user
		else{
			if(!(username && password && confirmPassword)){
				err = "All fields must be filled";
			}
			else if(username === password){
				err = "Password cannot be username";
			}
			else if(password !== confirmPassword){
				err = "Passwords must match";
			}
			else if(password.length < 8){
				err = "Password must be at least 8 characters long";
			}
			if(err){
				res.status(200).json({error: err});
			}
			else{
				hash({ password: password }, function (err, pass, salt, hash) {
			    if (err) throw err;
			    // store the salt & hash in the "db"
					new User({
			      username: username,
						salt: salt,
			      hash: hash
			    }).save(function(err){
			      if(err){
			        res.json({'error': 'Error saving data'})
			      }
			      else{
			        res.json({'success': true});
			      }
			    });
			  });
			}
		}
  });

});

app.listen(port, function(){
	console.log(`listening on  ${port} `)
})
