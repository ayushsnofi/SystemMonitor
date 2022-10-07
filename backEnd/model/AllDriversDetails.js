import mongoose from "mongoose";

const allDriverDetails = new mongoose.Schema(
  {
    drivers: { type: mongoose.Schema.Types.Mixed, default: null },
  },
  { timestamps: true }
);

const AllDriverDetails = mongoose.model("AllDriveDetails", allDriverDetails);

export default AllDriverDetails;
