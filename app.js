const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const User = require("./models/user");
const user = require("./models/user");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/create", async (req, res) => {
    await User.create({
        name: req.body.name,
        gmail: req.body.gmail,
        age: req.body.age,
        image: req.body.image
    });
    res.redirect("/read");
});

app.get("/read", async (req, res) => {
    const allusers = await User.find();
    res.render("read", { users: allusers });
});

app.get("/edit/:_id", async (req,res)=>{
    const editData = await User.findById( req.params._id);
    res.render("edit",{editData});
});

app.post("/edit/:_id", async (req,res)=>{
    await user.findByIdAndUpdate(req.params._id, req.body)
    res.redirect("/read")
})

app.post("/delete/:_id", async (req, res) => {
    await User.findByIdAndDelete(req.params._id);
    res.redirect("/read");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});