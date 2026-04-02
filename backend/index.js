import express from "express";
import routes from "./routes.js";
import cors from "cors";
import dotenv from "dotenv";

// Only load .env in development, not in production
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";


const app = express();

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());
app.use('', routes);

export default app;