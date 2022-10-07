import express from "express";
import {
  getCpuDetails,
  getDriveDetails,
  getMemDetails,
} from "../controller/main.js";

const router = express.Router();

router.route("/cpu").get(getCpuDetails);
router.route("/drive").get(getDriveDetails);
router.route("/mem").get(getMemDetails);

export default router;
