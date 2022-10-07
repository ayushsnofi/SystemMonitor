import mongoose from "mongoose";

const memDetailsSchema = new mongoose.Schema(
  {
    memoryInfo: {
      totalMemMb: { type: Number, default: null },
      usedMemMb: { type: Number, default: null },
      freeMemMb: { type: Number, default: null },
      usedMemPercentage: { type: Number, default: null },
      freeMemPercentage: { type: Number, default: null },
    },
  },
  { timestamps: true }
);

const MemoryDetails = mongoose.model("MemoryDetails", memDetailsSchema);

export default MemoryDetails;
