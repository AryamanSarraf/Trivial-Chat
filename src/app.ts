import express from "express";
import session from "express-session";
import passport from "passport";
import { resolve } from "path";
import { router } from "./routes/index";
import {myPassport} from "./controllers/services/passport"

export const app = express();

myPassport(passport);

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: true,
  })
);

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
