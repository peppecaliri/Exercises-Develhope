import * as Express from "express";

const app = Express();
app.use(Express.json());

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/", (req: any, res: any) => {
  res.send("<h1>Started</h1>");
});

app.listen(3001);
