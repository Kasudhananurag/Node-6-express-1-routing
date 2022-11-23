const experss = require("express");
const app = experss();

app.get("",(req,res) => {
    res.send("Hello this is home page");
});

app.get("/about",(req,res) => {
    res.send("Hello this is about page");
});

app.get("/help",(req,res) => {
    res.send("Hello this is help page");
});

app.listen(3000)