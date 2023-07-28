"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImage = exports.deleteById = exports.updateById = exports.getOneById = exports.create = exports.getAll = exports.validation = void 0;
const Joi = __importStar(require("joi"));
const pgPromise = require("pg-promise");
const db = pgPromise()("postgres://postgres:2693@localhost:5432/esercitazione");
const setupDb = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db.none(`
    DROP TABLE IF EXISTS planets;
    CREATE TABLE planets(
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
);
`);
    // await db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
    // await db.none(`INSERT INTO planets (name) VALUES ('Mars')`);
    // await db.none(`INSERT INTO planets (name) VALUES ('Jupiter')`);
    // const planets = await db.many(`SELECT * FROM planets;`);
    // console.log(planets);
});
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
const validation = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.number().integer().required(),
        name: Joi.string().min(3).max(10).required(),
    });
    const { id, name } = req.body;
    const { error } = schema.validate({ id, name });
    if (error) {
        res.status(500).json({ message: "An error occurred." });
    }
    else
        next();
};
exports.validation = validation;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(yield db.many(`SELECT * FROM planets;`));
});
exports.getAll = getAll;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name } = req.body;
    yield db.none(`INSERT INTO planets (name) VALUES ($${name})`);
    res.status(201).json({ msg: "pianeta creato con successo" });
});
exports.create = create;
const getOneById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const filterdById = yield db.many(`SELECT * FROM planets WHERE id=$${id}`);
    res.status(200).json(filterdById);
});
exports.getOneById = getOneById;
const updateById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name } = req.body;
    if (name && id) {
        yield db.none(`UPDATE planets SET name=$${name} WHERE id=$${id};`);
        res.status(200).json({ msg: "pianeta modificato con successo" });
    }
    else
        res.status(500).json({ msg: "il pianeta indicato non esiste" });
});
exports.updateById = updateById;
const deleteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield db.none(`DELETE FROM planets WHERE id=$${id}`);
    res.status(201).json({ msg: "il pianeta è stato eliminato" });
});
exports.deleteById = deleteById;
const createImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(201).json({ msg: "Planet image uploaded successfully" });
});
exports.createImage = createImage;
