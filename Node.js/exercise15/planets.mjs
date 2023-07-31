import Joi from "joi";
import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import pgPromise from "pg-promise";

export const db = pgPromise()(
  "postgres://postgres:2693@localhost:5432/esercitazione"
);

const setupDb = async () => {
  await db.none(`
    DROP TABLE IF EXISTS planets;
    CREATE TABLE planets(
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
    image TEXT
);
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  token TEXT
);
`);

  // await db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
  // await db.none(`INSERT INTO planets (name) VALUES ('Mars')`);
  // await db.none(`INSERT INTO planets (name) VALUES ('Jupiter')`);

  // const planets = await db.many(`SELECT * FROM planets;`);
  // console.log(planets);
};
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

export const validation = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().min(3).max(10).required(),
  });
  const { id, name } = req.body;
  const { error } = schema.validate({ id, name });

  if (error) {
    res.status(500).json({ message: "An error occurred." });
  } else next();
};

export const getAll = async (req, res) => {
  res.status(200).json(await db.many(`SELECT * FROM planets;`));
};
export const create = async (req, res) => {
  const { id, name } = req.body;
  await db.none(`INSERT INTO planets (name) VALUES ($${name})`);
  res.status(201).json({ msg: "pianeta creato con successo" });
};

export const getOneById = async (req, res) => {
  const { id } = req.params;
  const filterdById = await db.many(`SELECT * FROM planets WHERE id=$${id}`);
  res.status(200).json(filterdById);
};

export const updateById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (name && id) {
    await db.none(`UPDATE planets SET name=$${name} WHERE id=$${id};`);
    res.status(200).json({ msg: "pianeta modificato con successo" });
  } else res.status(500).json({ msg: "il pianeta indicato non esiste" });
};

export const deleteById = async (req, res) => {
  const { id } = req.params;
  await db.none(`DELETE FROM planets WHERE id=$${id}`);
  res.status(201).json({ msg: "il pianeta è stato eliminato" });
};

export const createImage = async (req, res) => {
  const { id } = req.params;
  const fileName = req.file?.path;
  if (fileName) {
    db.none(`UPDATE planets SET image=$2 WHAERE id=$1`, [id, fileName]);
    res.status(200).json({ msg: "planet image upload" });
  } else {
    res.status(400).json({ msg: "planet image failed upload" });
  }
};

export const logIn = async (req, res) => {
  const { username, password } = req.body;
  const user = await db.none("SELECT * FROM users WHERE username=$1", username);
  if (user && user.password === password) {
    const payload = {
      id: user.id,
      username,
    };
    const { SECRET = "" } = process.env;
    const token = jwt.sign(payload, SECRET);
    console.log(token);
    await db.none(" UPDATE users SET token=$2 WHERE id=$1", [user.id, token]);
    res.status(200).json({ id: user.id, username, token });
  } else {
    res.status(400).json({ msg: "user or pass not found" });
  }
};

export const signUp = async (req, res) => {
  const { username, password } = req.body;
  const user = await db.oneOrNone(
    "SELECT * FROM users WHERE username=$1",
    username
  );
  if (user) {
    res.status(409).json({ msg: "user exist!" });
  } else {
    const { id } = await db.one(
      "INSERT INTO users (username,password) VALUES ($1,$2) RETURNING id",
      [username, password]
    );
  }
  res.status(200).json({ id, msg: "user created succesfully." });
};

export const logOut = async (req, res) => {
  const user = req.user;
  await db.one("UPDATE users SET token= $2 WHERE id =$1", [user?.id, null]);
  res.status(200).json({ msg: "logout ok" });
};
