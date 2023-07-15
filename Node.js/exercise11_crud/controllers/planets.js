"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.create = exports.getOneById = exports.getAll = void 0;
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
var getAll = function (req, res) {
    res.status(200).json(planets);
};
exports.getAll = getAll;
var getOneById = function (req, res) {
    var id = req.params.id;
    var planet = planets.filter(function (p) { return p.id === Number(id); });
    res.status(200).json(planet);
};
exports.getOneById = getOneById;
var create = function (req, res) {
    var _a = req.body, id = _a.id, name = _a.name;
    var NewPlanet = { id: id, name: name };
    planets = __spreadArray(__spreadArray([], planets, true), [NewPlanet], false);
    res.status(200).json({ msg: "Planet created" });
};
exports.create = create;
var updateById = function (req, res) {
    var id = req.params.id;
    var name = req.body.name;
    planets = planets.map(function (p) { return (p.id === Number(id) ? __assign(__assign({}, p), { name: name }) : p); });
    res.status(200).json({ msg: "planet updated" });
};
exports.updateById = updateById;
var deleteById = function (req, res) {
    var id = req.params.id;
    planets = planets.filter(function (p) { return p.id !== Number(id); });
    res.status(200).json({ msg: "planet deleted" });
};
exports.deleteById = deleteById;
