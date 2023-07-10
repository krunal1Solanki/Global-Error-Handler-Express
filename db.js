const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017')
.then(()=> {console.log("mongo connected")})
.catch((err) => {console.log("Error occured", err)})