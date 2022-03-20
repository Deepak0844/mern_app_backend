import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import DB from "./db.js";
import { userRouter } from "./router/userRouter.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//db
DB();

app.get("/", (request, response) => {
  response.send("home");
});

app.use("/user", userRouter);

app.listen(PORT, () => console.log("Server started", PORT));
