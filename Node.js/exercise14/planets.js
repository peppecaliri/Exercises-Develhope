"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.getOneById = exports.create = exports.getAll = exports.validation = void 0;
var Joi = require("joi");
var pgPromise = require("pg-promise");
var db = pgPromise()("postgres://postgres:2693@localhost:5432/esercitazione");
var setupDb = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db.none("\n    DROP TABLE IF EXISTS planets;\n    CREATE TABLE planets(\n    id SERIAL NOT NULL PRIMARY KEY,\n    name TEXT NOT NULL\n);\n")];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
setupDb();
// let planets: Planets = [
//   {
//     id: 1,
//     name: "Earth",
//   },
//   {
//     id: 2,
//     name: "Mars",
//   },
// ];
var validation = function (req, res, next) {
    var schema = Joi.object({
        id: Joi.number().integer().required(),
        name: Joi.string().min(3).max(10).required(),
    });
    var _a = req.body, id = _a.id, name = _a.name;
    var error = schema.validate({ id: id, name: name }).error;
    if (error) {
        res.status(500).json({ message: "An error occurred." });
    }
    else
        next();
};
exports.validation = validation;
var getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = res.status(200)).json;
                return [4 /*yield*/, db.many("SELECT * FROM planets;")];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); };
exports.getAll = getAll;
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, name;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, name = _a.name;
                return [4 /*yield*/, db.none("INSERT INTO planets (name) VALUES ($".concat(name, ")"))];
            case 1:
                _b.sent();
                res.status(201).json({ msg: "pianeta creato con successo" });
                return [2 /*return*/];
        }
    });
}); };
exports.create = create;
var getOneById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, filterdById;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, db.many("SELECT * FROM planets WHERE id=$".concat(id))];
            case 1:
                filterdById = _a.sent();
                res.status(200).json(filterdById);
                return [2 /*return*/];
        }
    });
}); };
exports.getOneById = getOneById;
var updateById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, name;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                name = req.body.name;
                if (!(name && id)) return [3 /*break*/, 2];
                return [4 /*yield*/, db.none("UPDATE planets SET name=$".concat(name, " WHERE id=$").concat(id, ";"))];
            case 1:
                _a.sent();
                res.status(200).json({ msg: "pianeta modificato con successo" });
                return [3 /*break*/, 3];
            case 2:
                res.status(500).json({ msg: "il pianeta indicato non esiste" });
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateById = updateById;
var deleteById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, db.none("DELETE FROM planets WHERE id=$".concat(id))];
            case 1:
                _a.sent();
                res.status(201).json({ msg: "il pianeta è stato eliminato" });
                return [2 /*return*/];
        }
    });
}); };
exports.deleteById = deleteById;
