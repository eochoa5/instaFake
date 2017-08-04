
var Pic = require('../datasets/pics.js');

module.exports.getPics = function(req, res){

	Pic.find({})
		.limit(10)
		.exec(function(error, photos){

			if(error){
				res.send(500).end();

			}else{
				res.json(photos);
			}

		});
	



}