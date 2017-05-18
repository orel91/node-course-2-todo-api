const mongoose = require("mongoose");

// tell Mongoose to use the javacript promises library
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {
    mongoose
};