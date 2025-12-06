const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// === ADD YOUR VERCEL URL HERE ===
const allowedOrigins = [
  "https://crud-app-3haw.vercel.app", // <-- yahan apna real Vercel URL daalo
  "http://localhost:5500",            // local testing
  "http://localhost:3000"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

connectDB();

app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
