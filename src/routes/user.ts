import {Router} from "express";
import {handleGetUser, handleSignUp} from "../controllers/user";

export const userRouter = Router();

userRouter.get("/", handleGetUser);
userRouter.post("/signup", handleSignUp);
