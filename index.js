import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path, { dirname } from "path";
import auth from "./Routes/Auth.js";
import post from "./Routes/Post.js";
import user from "./Routes/Users.js";
import category from "./Routes/Category.js";

const app = express();
const PORT = 5000;
const __dirname = path.resolve()

mongoose
  .connect(
    `mongodb+srv://denipamungkas:BMSBGDTG@cluster0.yzqqxu4.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("terhubung ke database");
  })
  .catch((err) => {
    console.log("gagal terhubung ke database", err.message);
  });
app.listen(PORT, () => {
  console.log("server telah berjalan");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});
app.use(express.json());
app.use('/Images',express.static(path.join(__dirname,"/Images")))
app.use("/api", auth);
app.use("/api/post", post);
app.use("/api/user", user);
app.use("/api/category", category);
