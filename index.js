var express = require('express');
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cloudinary = require('cloudinary');

app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html');

});

process.env.MONGO_CONNECT = "";

mongoose.connect(process.env.MONGO_CONNECT);

process.env.CLOUDINARY_URL="";

var Pic = require('./datasets/pics.js');

cloudinary.config({ 
  cloud_name: 'dxfjgqyxu', 
  api_key: '', 
  api_secret: '' 
});


cloudinary.uploader.upload('./dev.png', function(result){

	var picture = new Pic();
	picture.name = "Pic of developer";
	picture.url= result.secure_url;

	picture.save();

});


app.use(express.static(__dirname));



http.listen(process.env.PORT || 9000, function(){
	console.log('server running');
});