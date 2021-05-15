import { Request, Response } from "express";
import { resolve } from "path";
import { MyUser } from "./Entity/user";
import { MyError } from "./Entity/error";

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
    res.redirect("/?"+"msg=you can log in");
  }else {
      const errors = newUser.validate();
      console.log(errors);
  }
};
