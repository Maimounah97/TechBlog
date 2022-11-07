const mongoose = require("mongoose");


// ---------------slides schema------------

const slideSchema = new mongoose.Schema({
	title : {
		type : String ,
        required: [true, "Title is required"],
	},
	image : {
		type : String ,
        required: [true, "Image is required"],
	},
   
	
},

	{ timestamps: true }
);

const slide = mongoose.model("slide", slideSchema);

module.exports = slide;