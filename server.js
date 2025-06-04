"use strict";

const express = require("express");
const app = express();
const port = 8080;
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));