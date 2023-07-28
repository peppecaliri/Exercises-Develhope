import * as Express from "express";

import {
  getAll,
  getOneById,
  validation,
  create,
  updateById,
  deleteById,
} from "./planets.js";

const app = Express();
app.use(Express.json());
const port = 3000;

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);

app.post("/api/planets", validation, create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets:id", deleteById);

app.listen(port, () => {
  console.log(`Il server sta rannando sulla porta ${port} `);
});
