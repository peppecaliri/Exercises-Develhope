"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var planets_js_1 = require("./planets.js");
var app = Express();
app.use(Express.json());
var port = 3000;
app.get("/api/planets", planets_js_1.getAll);
app.get("/api/planets/:id", planets_js_1.getOneById);
app.post("/api/planets", planets_js_1.validation, planets_js_1.create);
app.put("/api/planets/:id", planets_js_1.updateById);
app.delete("/api/planets:id", planets_js_1.deleteById);
app.listen(port, function () {
    console.log("Il server sta rannando sulla porta ".concat(port, " "));
});
