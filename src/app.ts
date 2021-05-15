import express from "express";
import { resolve } from "path";
import { router } from "./routes/index";

export const app = express();

app.use(express.static(resolve(__dirname.replace("/src", "/views"))));

app.use("/", router);

app.use((req, res) => {
  res.sendFile(resolve(__dirname.replace("/src", "/views"), "404.html"));
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.sendFile(resolve(__dirname.replace("/src", "/views"), "error.html"));
    next();
  }
);
