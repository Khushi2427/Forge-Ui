import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generateRoute from "./routes/generate.js";
import generator2Route from "./routes/generator2.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* -------------------- Middleware -------------------- */

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  })
);

app.use(express.json());

/* -------------------- Health Check -------------------- */

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ForgeUI Server Running 🚀"
  });
});

/* -------------------- Routes -------------------- */

app.use("/api", generateRoute);
app.use("/api", generator2Route);

/* -------------------- Error Handling -------------------- */

app.use((err, req, res, next) => {
  console.error("🔥 Error:", err);
  res.status(500).json({
    error: "Server crashed",
    message: err.message
  });
});

/* -------------------- Start -------------------- */

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});