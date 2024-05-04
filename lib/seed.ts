import { sql } from "@vercel/postgres";
import { IDsTable, NewID } from "./schema";
import { db } from "./drizzle";

const newIDs: NewID[] = [
  {
    id: "12345",
  },
];

export async function seed() {
  console.log("Seeding database...");

  const createTable = await sql.query(`
        CREATE TABLE IF NOT EXISTS ids (
            id VARCHAR(16) PRIMARY KEY NOT NULL,
            taken BOOLEAN DEFAULT TRUE NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIMEZONE DEFAULT CURRENT_TIMESTAMP 
        );
    `);

  console.log("Created 'ids' table.");

  const insertedIDs = await db.insert(IDsTable).values(newIDs).returning();

  console.log(`Seeded ${newIDs.length} ids.`);

  return { createTable, insertedIDs };
}
