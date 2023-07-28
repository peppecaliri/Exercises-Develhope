import * as Express from "express";
import multer from "multer";

import {
  getAll,
  getOneById,
  validation,
  create,
  updateById,
  deleteById,
  createImage,
} from "./planets.js";

const app = Express();
app.use(Express.json());
const port = 3000;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);

app.post("/api/planets", validation, create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets:id", deleteById);

app.post("api/planets/id:image", upload.single("image"), createImage);

app.listen(port, () => {
  console.log(`Il server sta rannando sulla porta ${port} `);
});
