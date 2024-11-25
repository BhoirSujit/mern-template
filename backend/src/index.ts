import express, { Request, Response } from "express";
import env from "./utils/env";
import app from "./app";
import path from "path";

const server = express();
const dirname = path.resolve();

server.use("/api", app);

if (env.NODE_ENV === "production") {
  app.use(express.static(path.join(dirname, "../frontend/dist")));
  console.log("front end path : ", path.join(dirname, "../frontend/dist"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(dirname, "../frontend", "dist", "index.html"));
  });
} else {
  server.get("*", (req: Request, res: Response) => {
    res.status(404).send("You are in developemnt");
  });
}

server.listen(env.PORT, () => {
  console.log("Server running on port: ", env.PORT);
});
