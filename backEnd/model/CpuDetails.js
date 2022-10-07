import mongoose from "mongoose";

const cpuDetailsSchema = new mongoose.Schema(
  {
    cpuInfo: {
      totalIdle: { type: Number, default: null },
      totalTick: { type: Number, default: null },
      avgIdle: { type: Number, default: null },
      avgTotal: { type: Number, default: null },
    },
    cpuAvgUsage: { type: Number, default: null },
    cpuAvgFreePercentage: { type: Number, default: null },
  },
  { timestamps: true }
);

const CpuDetails = mongoose.model("CpuDetails", cpuDetailsSchema);

export default CpuDetails;
