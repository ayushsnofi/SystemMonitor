import schedule from "node-schedule";
import osu from "node-os-utils";
import dotenv from "dotenv";
import CpuDetails from "../model/CpuDetails.js";

import DriveDetails from "../model/DriveDetails.js";
import nodeDiskInfo from "node-disk-info";
import AllDriverDetails from "../model/AllDriversDetails.js";
import MemoryDetails from "../model/MemoryDetails.js";

schedule.scheduleJob(`*/59 * * * * * `, async () => {
  console.log("hi");
  // cpu info
  const cpu = osu.cpu;
  const cpuInfo = await cpu.average();

  // average usage
  const cpuUsage = await cpu.usage();

  // cpu free %
  const cpuFree = await cpu.free();

  const cpuDetail = await CpuDetails.create({
    cpuInfo: cpuInfo,
    cpuAvgUsage: cpuUsage,
    cpuAvgFreePercentage: cpuFree,
  });
  const res = await cpuDetail.save();

  //   diskInfo
  const diskInfo = await nodeDiskInfo.getDiskInfo();

  const allDriver = await AllDriverDetails.create({ drivers: diskInfo });
  await allDriver.save();

  //   Memory Details
  const mem = osu.mem;
  const memInfo = await mem.info();
  const memory = await MemoryDetails.create({ memoryInfo: memInfo });
  await memory.save();
});
