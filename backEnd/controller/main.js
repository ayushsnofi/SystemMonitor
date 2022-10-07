import asyncHandler from "express-async-handler";
import CpuDetails from "../model/CpuDetails.js";
import MemoryDetails from "../model/MemoryDetails.js";
import AllDriveDetails from "../model/AllDriversDetails.js";

const getCpuDetails = asyncHandler(async (req, res) => {
  try {
    const data = await CpuDetails.find();
    res.status(200).json({
      status: "ok",
      data: data,
    });
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

const getDriveDetails = asyncHandler(async (req, res) => {
  try {
    const data = await AllDriveDetails.find();

    res.status(200).json({
      status: "ok",
      data: data,
    });
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

const getMemDetails = asyncHandler(async (req, res) => {
  try {
    const data = await MemoryDetails.find();

    res.status(200).json({
      status: "ok",
      data: data,
    });
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

export { getCpuDetails, getDriveDetails, getMemDetails };
