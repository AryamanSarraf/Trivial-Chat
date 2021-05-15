import { Request, Response } from "express";
import { resolve } from "path";

export const handleGetUser = (req: Request, res: Response) => {
  res.sendFile(
    resolve(__dirname.replace("/src/controllers", "/views"), "jobs.html")
  );
};
