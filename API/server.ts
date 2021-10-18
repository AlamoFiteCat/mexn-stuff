import express from "express";
import cors from "./const/cors.const";
import session from "./const/session.const";
import router from "./const/router.const";

const app = express();

const PORT = process.env.PORT || 3000;

app.set("trust proxy", 1);
app.use(cors);

// app.use(express.static(path.join(__dirname, "static")));

// app.get(/^\/(?!api).*/, function (req, res) {
//   res.sendFile(path.join(__dirname, "static", "index.html"));
// });

app.use(session);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server listening at http://localhost:3000");
});
