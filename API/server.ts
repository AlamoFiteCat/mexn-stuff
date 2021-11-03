import express from "express";
import cors from "./const/cors.const";
import session from "./const/session.const";
import router from "./const/router.const";
import mongoose from "mongoose";
import { firebaseApp } from "./const/firebase.const";

const app = express();

const PORT = process.env.PORT || 4000;

app.set("trust proxy", 1);
app.use(cors);
app.use(session);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", router);

mongoose.connect("mongodb://localhost:27017/tododb").then(() => {
  app.listen(PORT, () => {
    console.log("Server listening at http://localhost:4000");
  });
});
