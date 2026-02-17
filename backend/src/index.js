import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import "./config/passport.js";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(passport.initialize());

app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running"));
