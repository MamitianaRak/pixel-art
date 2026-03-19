import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import healthRouter from "./routes/health.route";

const app = express();
const port = Number(process.env.PORT ?? 3000);
const mongoUri = process.env.MONGO_URI ?? "mongodb://localhost:27017/pixel-art";
const corsOrigin = process.env.CORS_ORIGIN ?? "http://localhost:5173";

app.use(cors({ origin: corsOrigin }));
app.use(express.json());
app.use("/api", healthRouter);

app.get("/", (_req, res) => {
  res.json({ message: "Pixel Art API" });
});

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, () => {
      console.log(`API running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Mongo connection error:", error);
    process.exit(1);
  });
