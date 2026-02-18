const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/");

const createSchema = mongoose.Schema({
    name:String,
    phone:Number,
    age:Number
});

const createModle = mongoose.model("create",createSchema);

export default createModle;
