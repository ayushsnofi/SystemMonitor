import mongoose from "mongoose";

const driveDetails = new mongoose.Schema(
  {
    drive: {
      _filesystem: { type: String, default: "" },
      _blocks: { type: Number, default: 0 },
      _used: { type: Number, default: 0 },
      _available: { type: Number, default: 0 },
      _capacity: { type: String, default: "" },
      _mounted: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

const DriveDetails = mongoose.model("DriveDetails", driveDetails);

export default DriveDetails;
