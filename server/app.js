const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));
//db
const mongoose = require('mongoose');
require("./db.js");//call connection to db and load models
const User = mongoose.model('User');


// import user routes
const userRoutes = require('./routes/userRoutes');

// user routes
app.use(userRoutes);

// pswd hash
// var hash =require('pbkdf2-password')()

// app.get('/', (req,res) => {
// 	res.send("connected to app")
// })

// app.post('/login', async function(req, res) {
// 	const username = req.body.username;
// 	const password  = req.body.password;
// 	// const username="username"
// 	// const password="password"
// 	let error = '';
// 	await User.find({username: username}, (issue, users)=>{
// 		const user = users[0];
// 		if(!(username && password)){
// 			error = "Please fill in both fields";
// 		}
// 		else if(!user){
// 			error = "Username does not exist";
// 		}
// 		if(error){
// 			return res.json({"error": error});
// 		}
// 		//valid username
// 		else{
// 			hash({ password: password, salt: user.salt }, function (err, pass, salt, hash) {
// 				if(err){
// 					error = "Password and Username do not match";
// 					return res.json({"error": error});
// 				}
//         else if (hash === user.hash){ //success
// 					// req.session.user = user['_id']; add when we add session
// 					return res.json({'success':true});
// 				}
// 				else{
// 					error = "Password and Username do not match";
// 					return res.json({"error": error});
// 				}
//       });
// 		}
// 	});


// });

// app.post('/create-account', async function(req, res) {
// 	const username = req.body.username;
// 	const firstName = req.body.firstName;
// 	const lastName = req.body.lastName;
// 	const password  = req.body.password;
// 	const confirmPassword = req.body.confirmPassword;
// 	let err = "";
// 	await User.find({username: username}, (issue, users)=>{
//     if(users[0]){
// 			err = "Username exists";
// 			return res.status(200).json({error: err});
// 		}
// 		//new user
// 		else{
// 			if(!(firstName && lastName && username && password && confirmPassword)){
// 				err = "All fields must be filled";
// 			}
// 			else if(username === password){
// 				err = "Password cannot be username";
// 			}
// 			else if(password !== confirmPassword){
// 				err = "Passwords must match";
// 			}
// 			else if(password.length < 8){
// 				err = "Password must be at least 8 characters long";
// 			}
// 			if(err){
// 				return res.status(200).json({error: err});
// 			}
// 			else{
// 				hash({ password: password }, function (err, pass, salt, hash) {
// 			    if (err) throw err;
// 			    // store the salt & hash in the "db"
// 					new User({
// 						firstName: firstName,
// 						lastName: lastName,
// 			      username: username,
// 						salt: salt,
// 			      hash: hash
// 			    }).save(function(err){
// 			      if(err){
// 			        return res.json({'error': 'Error saving data'})
// 			      }
// 			      else{
// 			        return res.json({'success': true});
// 			      }
// 			    });
// 			  });
// 			}
// 		}
//   });

// });

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.listen(PORT, function(){
	console.log(`listening on  ${PORT} `)
});
