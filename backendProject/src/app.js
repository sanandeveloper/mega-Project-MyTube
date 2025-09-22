import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/user.routes.js";
import dotenv from "dotenv"
dotenv.config()

const app = express();
app.use(
  cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
  }),
);
app.use(
  express.json({
    limit: "16kb",
  }),
);
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
// app.use(express.json()); // so req.body works

console.log("hello world")

app.use("/api/v1/users",router);

export {app};
