import { migrate } from "drizzle-orm/neon-http/migrator";
import { database } from "./index";

const main = async () => {
  try {
    await migrate(database, {
      migrationsFolder: "src/database/migrations",
    });
    console.log("Migration completed");
  } catch (error) {
    console.error("Error during migration: ", error);
    process.exit(1);
  }
};

main();
