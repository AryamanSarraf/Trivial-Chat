import { Request, Response } from "express";
import { resolve } from "path";
import {io} from "../../server"

export const handleGetIndex = (req: Request, res: Response) => {
  res.sendFile(
    resolve(__dirname.replace("/src/controllers", "/views"), "welcome.html")
  );
};
export const handleGetMessage = (req: Request, res: Response) => {
    io.on("connection", (socket) => {
        console.log("user connected")
    })
  res.sendFile(
    resolve(__dirname.replace("/src/controllers", "/views"), "messages.html")
  );
};

export const handleGetJobs = (req: Request, res: Response) => {
  res.sendFile(
    resolve(__dirname.replace("/src/controllers", "/views"), "jobs.html")
  );
};

export const handleGetCovid19 = (req: Request, res: Response) => {
  res.sendFile(
    resolve(__dirname.replace("/src/controllers", "/views"), "covid-19.html")
  );
};

export const handleGetFacilities = (req: Request, res: Response) => {
  res.sendFile(
    resolve(__dirname.replace("/src/controllers", "/views"), "facilities.html")
  );
};

export const handleGetNoticeBoard = (req: Request, res: Response) => {
  res.sendFile(
    resolve(
      __dirname.replace("/src/controllers", "/views"),
      "notice-board.html"
    )
  );
};

export const handleGetWelcomeUser = (req: Request, res: Response) => {
  res.json(req.user);
};
