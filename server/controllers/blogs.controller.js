const blogs = require('../models/blogs.model');

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World"
  });
}

module.exports.createBlog = (request, response) => {
  const { title, category, image, summary, article } = request.body;
  blogs.create({
    title,
    category,
    image,
    summary,
    article
  })
    .then(blogs => response.json(blogs))
    .catch(err => response.status(400).json(err));
}

module.exports.findAllBlogs = (req, res) => {
  blogs.find()
    .then(allBlogs => res.json({ blogs: allBlogs  }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.getBlog = (request, response) => {
  blogs.findOne({_id:request.params.id})
      .then(blog => response.json(blog))
      .catch(err => response.json(err))
}


module.exports.updateBlog = (request, response) => {
  blogs.findOneAndUpdate({_id: request.params.id}, request.body, {new:true , runValidators: true})
      .then(updatedBlog => response.json(updatedBlog))
      .catch(err => response.status(400).json(err))
}



module.exports.deleteBlog = (request, response) => {
  blogs.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}

