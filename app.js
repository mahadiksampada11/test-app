const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get("/health", (req, res) => {
    res.send("Healthy");
});

app.listen(3000, () => {
    console.log("Running on port 3000");
});
