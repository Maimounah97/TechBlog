const slide = require('../models/slide.model');

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World"
  });
}

module.exports.createImage = (request, response) => {
  const { title, image } = request.body;
  slide.create({
    title,
    image
   
  })
    .then(slide => response.json(slide))
    .catch(err => response.status(400).json(err));
}

module.exports.findAllImages = (req, res) => {
  slide.find()
    .then(allImages => res.json({ slide: allImages  }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.getImage = (request, response) => {
  slide.findOne({_id:request.params.id})
      .then(image => response.json(image))
      .catch(err => response.json(err))
}

module.exports.updateImage = (request, response) => {
  slide.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updatedImage => response.json(updatedImage))
      .catch(err => response.json(err))
}

module.exports.deleteImage = (request, response) => {
  slide.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}

