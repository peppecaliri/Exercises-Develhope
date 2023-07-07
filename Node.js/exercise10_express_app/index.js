"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var app = Express();
app.use(Express.json());
var planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    },
];
app.get("/", function (req, res) {
    res.send("<h1>Started</h1>");
});
app.listen(3001);
