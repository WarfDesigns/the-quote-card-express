"use strict";

const express = require("express");
const app = express();
const port = 5555;
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});
