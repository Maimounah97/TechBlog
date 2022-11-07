const blogsController = require('../controllers/blogs.controller');
const UserController = require("../controllers/user.controller");
const slideController = require("../controllers/slide.controller");
const { authenticate } = require("../middlewares/authjwt");

module.exports = function(app){

    //---------------------Blog------------------------//

    app.get('/api', blogsController.index);
    app.get("/api/blogs", blogsController.findAllBlogs);
    app.post('/api/blog/new',  blogsController.createBlog);
    app.get('/api/blog/:id', blogsController.getBlog);
    app.put('/api/blog/:id', blogsController.updateBlog);
    app.delete('/api/blog/:id', blogsController.deleteBlog);

    //---------------------User------------------------//

    app.post("/api/signup", UserController.signup);
    app.post("/api/login", UserController.login);
    app.get('/api/user/:id', UserController.getUser);
    app.get("/api/users", UserController.getAllUsers);
    app.delete('/api/user/:id', UserController.deleteUser);

    //---------------------Slide------------------------//

    app.get("/api/slide", slideController.findAllImages);
    app.post('/api/image/new',  slideController.createImage);
    app.get('/api/image/:id', slideController.getImage);
    app.put('/api/image/:id', slideController.updateImage);
    app.delete('/api/image/:id', slideController.deleteImage);

}

