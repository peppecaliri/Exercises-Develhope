import Express from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

import {
  getAll,
  getOneById,
  validation,
  create,
  updateById,
  deleteById,
  createImage,
  logIn,
  signUp,
  logOut,
} from "./planets.mjs";

const app = Express();
app.use(Express.json());
const port = 3000;

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);

app.post("/api/planets", validation, create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets:id", deleteById);

app.post("/api/planets:id/image", upload.single("image"), createImage);

app.post("/api/user/login", logIn);
app.post("/api/user/signup", signUp);
app.get("/api/user/logout", logOut);

app.listen(port, () => {
  console.log(`Il server sta rannando sulla porta ${port} `);
});
