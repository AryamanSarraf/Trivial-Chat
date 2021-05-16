import { Router } from "express";
import {
  handleGetIndex,
  handleGetJobs,
  handleGetCovid19,
  handleGetFacilities,
  handleGetNoticeBoard,
  handleGetMessage,
  handleGetWelcomeUser,
} from "../controllers/index";
import { auth } from "../controllers/services/microservices/auth";

export const router = Router();

router.get("/", handleGetIndex);
router.get("/jobs", handleGetJobs);
router.get("/covid19", handleGetCovid19);
router.get("/facilities", handleGetFacilities);
router.get("/notice-board", handleGetNoticeBoard);
router.get("/messages", auth, handleGetMessage);
router.get("/welcomeuser", handleGetWelcomeUser);
