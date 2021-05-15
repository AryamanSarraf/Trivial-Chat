import { Router } from "express";
import {handleGetIndex, handleGetJobs, handleGetCovid19, handleGetFacilities, handleGetNoticeBoard} from "../controllers/index";

export const router = Router();

router.get("/", handleGetIndex);
router.get("/jobs", handleGetJobs);
router.get("/covid19", handleGetCovid19);
router.get("/facilities", handleGetFacilities);
router.get("/notice-board", handleGetNoticeBoard);
