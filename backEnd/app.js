import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import mainRouter from "./routes/mainRoutes.js";
import morgan from "morgan";
import connectDb from "./config/connectDb.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
// import "./cronJobs/cronJob.js";

const __dirname = path.resolve();
connectDb();
const app = express();
app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/main", mainRouter);

app.get("/", (req, res) => {
  res.send("api running");
});

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = 8000;
app.listen(PORT, console.log(`Server Running on ${PORT}`));
