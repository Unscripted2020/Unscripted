const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));
//db
const mongoose = require('mongoose');
require("./db.js");//call connection to db and load models
const User = mongoose.model('User');
const Video = mongoose.model('Video');
const Category = mongoose.model('Category');
//pswd hash
var hash =require('pbkdf2-password')()


// import user routes
const userRoutes = require('./routes/userRoutes');

// user routes
app.use(userRoutes);

// pswd hash
// var hash =require('pbkdf2-password')()
app.post('/login', async function(req, res) {
	const username = req.body.username;
	const password  = req.body.password;
	// const username="username"
	// const password="password"
	let error = '';
	await User.find({username: username}, (issue, users)=>{
		const user = users[0];
		if(!(username && password)){
			error = "Please fill in both fields";
		}
		else if(!user){
			error = "Username does not exist";
		}
		if(error){
			return res.json({"error": error});
		}
		//valid username
		else{
			hash({ password: password, salt: user.salt }, function (err, pass, salt, hash) {
				if(err){
					error = "Password and Username do not match";
					return res.json({"error": error});
				}
        else if (hash === user.hash){ //success
					// req.session.user = user['_id']; add when we add session
					return res.json({'success':true});
				}
				else{
					error = "Password and Username do not match";
					return res.json({"error": error});
				}
      });
		}
	});
});

<<<<<<< HEAD
// app.get('/', (req,res) => {
// 	res.send("connected to app")
// })
||||||| merged common ancestors
app.post('/create-account', async function(req, res) {
	const username = req.body.username;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const password  = req.body.password;
	const confirmPassword = req.body.confirmPassword;
	let err = "";
	await User.find({username: username}, (issue, users)=>{
    if(users[0]){
			err = "Username exists";
			return res.status(200).json({error: err});
		}
		//new user
		else{
			if(!(firstName && lastName && username && password && confirmPassword)){
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
				return res.status(200).json({error: err});
			}
			else{
				hash({ password: password }, function (err, pass, salt, hash) {
			    if (err) throw err;
			    // store the salt & hash in the "db"
					new User({
						firstName: firstName,
						lastName: lastName,
			      username: username,
						salt: salt,
			      hash: hash
			    }).save(function(err){
			      if(err){
			        return res.json({'error': 'Error saving data'})
			      }
			      else{
			        return res.json({'success': true});
			      }
			    });
			  });
			}
		}
  });
=======
app.post('/create-account', async function(req, res) {
	console.log(req);
	const username = req.body.username;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const password  = req.body.password;
	const confirmPassword = req.body.confirmPassword;
	let err = "";
	await User.find({username: username}, (issue, users)=>{
    if(users[0]){
			err = "Username exists";
			return res.status(200).json({error: err});
		}
		//new user
		else{
			if(!(firstName && lastName && username && password && confirmPassword)){
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
				return res.status(200).json({error: err});
			}
			else{
				hash({ password: password }, function (err, pass, salt, hash) {
			    if (err) throw err;
			    // store the salt & hash in the "db"
					new User({
						firstName: firstName,
						lastName: lastName,
			      username: username,
						salt: salt,
			      hash: hash,
			      videos: []
			    }).save(function(err){
			      if(err){
			        return res.json({'error': 'Error saving data'})
			      }
			      else{
			        return res.json({'success': true});
			      }
			    });
			  });
			}
		}
  });
});
>>>>>>> origin/search

<<<<<<< HEAD
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
||||||| merged common ancestors
});
=======
app.post('/create-video', async function(req, res){
	const title = req.body.title;
	const link = req.body.link;
	const category = req.body.category;
	const description = req.body.description;
	const rating = -1;
	const user = req.body.user;

	await Category.find({category: category}, (issue, category)=>{
    if(category[0]){
			categoryObj = category[0];
		}
		else{
			return res.json({'error':'Category does not exist'})
		}
	})

	new Video({
		link: link,
		title: title,
		category: categoryObj,
		description: description,
		rating: rating,
		user: user
	}).save(function(err, result){
		if(err){
			return res.json({'error': err})
		}
		else{
			Category.updateOne({category: category}, {$push: {videos: result._id}}, function(error){
				if(error){
					return res.json({'error': error.toString()})
				} else{
					User.updateOne({_id: user}, {$push: {videos: result._id}}, function(error){
						if(error){
							return res.json({'error': error.toString()})
						} else{
							return res.json({'success': true})
						}
					})	
				}
			})
		}
	})
});

app.post('/delete-videos', async function(req, res){
	await Video.deleteMany({}, function(err, data){
		if(err){
			return res.json({'error': err});
		} else{
			return res.json({'success': true});
		}
	});
})

app.post('/create-category', async function(req, res){
	const category = req.body.category;
	console.log(req);

	await Category.find({category: category}, (issue, categories)=>{
    if(categories[0]){
			err = "Category already exists";
			return res.status(200).json({error: err});
		}
		else{
			new Category({
				category: category,
			  videos: []
			 }).save(function(err){
			  if(err){
			    return res.json({'error': err.toString()})
			  }
			  else{
			    return res.json({'success': true});
			  }
			})
		}
	})
});

app.post('/delete-categories', async function(req, res){
	await Category.deleteMany({}, function(err, data){
		if(err){
			return res.json({'error': err});
		} else{
			return res.json({'success': true});
		}
	});
})

app.get('/search', async function(req, res){
	const category = req.body.category;
	const query = req.body.query;

	if (query == null || category == null){
		res.json({'error': "No query sent with search request"});
		return;
	}
	
	Category.find({category: category})
		.populate({path: 'videos', select: ['title', 'description'], match: {$text:{$search: query}}})
		.exec(function(err, docs){
			if(err){
				res.send(err);
			} else{
				res.send(docs[0]['videos']);
			}
		})
});

app.get('/all-users', async function(req, res){
	User.find({}).then(function(users){
		res.send(users);
	});
});

app.get('/all-videos', async function(req, res){
	Video.find({}).then(function(videos){
		res.send(videos);
	});
});

app.get('/all-categories', async function(req, res){
	Category.find({}).then(function(categories){
		res.send(categories);
	});
});
>>>>>>> origin/search

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.listen(PORT, function(){
	console.log(`listening on  ${PORT} `)
});
