import {Router} from "express";
import {handleGetUser} from "../controllers/user";

export const userRouter = Router();

userRouter.get("/", handleGetUser);
