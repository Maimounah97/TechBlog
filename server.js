require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();

const uuid = require("uuid")

app.use(cors({ credentials: true, origin:  "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config'); 


require('./server/routes/main.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})