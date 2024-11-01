import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const sql = neon(process.env.NEON_DATABASE_URL!);

// logger
// const db = drizzle(sql, { logger: true })
const database = drizzle(sql);

export { database };
