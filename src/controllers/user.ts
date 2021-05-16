import { NextFunction, Request, Response } from "express";
import passport from "passport";
import { resolve } from "path";
import { MyUser } from "./Entity/user";

export interface IBody {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const handleGetUser = (req: Request, res: Response) => {
  res.sendFile(
    resolve(__dirname.replace("/src/controllers", "/views"), "jobs.html")
  );
};

export const handleSignUp = (req: Request, res: Response) => {
  const { name, username, password, email, confirmPassword }: IBody = req.body;
  const newUser = new MyUser(name, username, email, password, confirmPassword);
  if (newUser.validate() === "valid user") {
    newUser.save();
    res.send("<h1>Now you can log in </h1> <a href='/'>go back</a> to log in");
  } else {
    const errors = newUser.validate();
    if (errors !== "valid user") {
      res.send(
        `<h1>${errors.errors.map((err) => {
          return err;
        })}</h1>
        <a href="/"> Go back </a> and try to sign up again`
      );
    }
  }
};

export const handleSignIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("local", {
    failureRedirect: "/",
    successRedirect: "/messages",
  })(req, res, next);
};

export const handleGetLogOut = (req: Request, res: Response) => {
  req.logOut();
  res.redirect("/");
};
