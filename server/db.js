require("dotenv").config()
const mongoose = require('mongoose');
const url = process.env.MONGODBURL

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  salt: String, // add extra security to password,
  hash: String, // a password hash
  videos:[{type: mongoose.Schema.Types.ObjectId, ref: 'Video'}]
});

const Video = new mongoose.Schema({
  link: String,
  title: String,
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
  description: String,
  rating: Number,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

Video.on('index', function(err){
  if(err){
    console.log(err);
  } else{
    console.log("index success");
  }
})
Video.index({description: "text", title: "text"});

const Category = new mongoose.Schema({
  category: String,
  videos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Video'}]
});

mongoose.model('User', User);
mongoose.model('Video', Video);
mongoose.model('Category', Category);

//connect db
mongoose.connect(process.env.MONGODB_URI || url, {
	useNewUrlParser: "true",
	useUnifiedTopology: "true",
})
.then(() => console.log('connected to database'))
.catch(err =>{
	console.log(err)
});
