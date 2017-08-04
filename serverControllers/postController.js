var cloudinary = require('cloudinary');
var Pic = require('../datasets/pics.js');

module.exports.submitNewPicture = function(req, res){
	var filepath = req.files.file.path;
	var data = req.body.req;
	
	

cloudinary.uploader.upload(filepath, function(result){

	var picture = new Pic();
	picture.name = data.name;
	picture.description= data.description;
	picture.url= result.secure_url;

	picture.save();

	res.status(200).end();

});



}