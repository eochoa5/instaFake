var express = require('express');
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cloudinary = require('cloudinary');
var multiparty = require('connect-multiparty');
var multipartMiddleware = multiparty();

//controllers
var postController = require('./serverControllers/postController.js');
var viewImagesController = require('./serverControllers/view-images-controller.js');

app.use('/views', express.static(__dirname + '/views'));

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(multipartMiddleware);

//get endpoints
app.get('/getNewPics', viewImagesController.getPics);

app.get('/*', function(req, res){
	res.sendFile(__dirname+'/index.html');

});

//post endpoints

app.post('/share', multipartMiddleware, postController.submitNewPicture);



process.env.MONGO_CONNECT = "";

mongoose.connect(process.env.MONGO_CONNECT);

process.env.CLOUDINARY_URL="";

var Pic = require('./datasets/pics.js');

cloudinary.config({ 
  cloud_name: '', 
  api_key: '', 
  api_secret: '' 
});


http.listen(process.env.PORT || 9000, function(){
	console.log('server running');
});