import { NextFunction, Request, Response } from "express";
import * as Joi from "joi";

const pgPromise = require("pg-promise");

const db = pgPromise()("postgres://postgres:2693@localhost:5432/esercitazione");

const setupDb = async () => {
  await db.none(`
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
};
setupDb();

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

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

export const validation = (req: Request, res: Response, next: NextFunction) => {
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

export const getAll = async (req: Request, res: Response) => {
  res.status(200).json(await db.many(`SELECT * FROM planets;`));
};
export const create = async (req: Request, res: Response) => {
  const { id, name } = req.body;
  await db.none(`INSERT INTO planets (name) VALUES ($${name})`);
  res.status(201).json({ msg: "pianeta creato con successo" });
};

export const getOneById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const filterdById = await db.many(`SELECT * FROM planets WHERE id=$${id}`);
  res.status(200).json(filterdById);
};

export const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  if (name && id) {
    await db.none(`UPDATE planets SET name=$${name} WHERE id=$${id};`);
    res.status(200).json({ msg: "pianeta modificato con successo" });
  } else res.status(500).json({ msg: "il pianeta indicato non esiste" });
};

export const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.none(`DELETE FROM planets WHERE id=$${id}`);
  res.status(201).json({ msg: "il pianeta è stato eliminato" });
};
