import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { isHttpError } from "http-errors";
import connectDB from "./db/mongoose.db";

const app = express.Router();

//middlewares
app.use(express.json());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//db
//connectDB();

//api routes
app.get("/", (req, res) => {
  res.send("hellow");
});

app.get("*", (req: Request, res: Response) => {
  res.status(404).send("Api not found");
});

//handle http errors
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let status = 500;
  let message = "An unknown error occur";

  if (isHttpError(error)) {
    status = error.status;
    message = error.message;
  }

  res.status(status).json({
    error: message,
  });
});

export default app;
