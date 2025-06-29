import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, NODE_ENV, DB_URL, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

// Uses different port for development and production
