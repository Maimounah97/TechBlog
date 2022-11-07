const mongoose = require("mongoose");
const User = require('./user.model');

// ---------------blog schema------------
const blogsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Title is required"],
		minlength: [2, "Title must be at least 2 characters long"]
	},
	category: {
		type: String,
		required: [true, "Category is required"],
	},
	image: {
		type: String,
	},
	summary: {
		type: String,
		required: [true, "Summary is required"],
		minlength: [2, "Summary must be at least 2 characters long"],
		// maxLength: [200, "Summary must be not more than 200 characters long"]
	},
	article: {
		type: String,
		required: [true, "Article is required"],
		minlength: [2, "Article must be at least 2 characters long"]
	},

},

	{ timestamps: true }
);

const blogs = mongoose.model("blogs", blogsSchema);

module.exports = blogs;