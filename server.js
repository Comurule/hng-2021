
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('resume'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/resume/index.html");
});

app.listen(port, ()=>{console.log(`server active here::: http://localhost:${port}`)});