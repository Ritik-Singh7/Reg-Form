const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/formdemo")

const formSchema = mongoose.Schema({
    name: String,
    gmail: String,
    age: Number,
    image: String
})

module.exports = mongoose.model('user', formSchema)