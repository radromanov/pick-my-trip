import "@next/env";
import { sql } from "@vercel/postgres";
import { countries } from "./schema";
import { db } from "./drizzle";
import { Country } from "./types";

export async function seed() {
  console.log("Seeding database...");

  const countriesResp = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flag,latlng"
  );
  const allCountries = await countriesResp.json();

  // const createTable = await sql.query(`
  //       CREATE TABLE IF NOT EXISTS countries (
  //           id SERIAL PRIMARY KEY NOT NULL,
  //           name VARCHAR(255) UNIQUE NOT NULL,
  //           flag VARCHAR(255) UNIQUE NOT NULL,
  //           lat INTEGER NOT NULL,
  //           lng INTEGER NOT NULL,
  //           created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  //           updated_at TIMESTAMP WITH TIMEZONE DEFAULT CURRENT_TIMESTAMP
  //       );
  //   `);

  console.log("Created 'countries' table.");

  const formattedCountries = allCountries.map((country: any) => {
    const { name, flag, latlng } = country;
    const [lat, lng] = latlng;

    return {
      name: name.common,
      flag,
      lat,
      lng,
    };
  });

  const inserted = await db
    .insert(countries)
    .values(formattedCountries)
    .returning();

  console.log(`Seeded ${allCountries.length} ids.`);

  return { inserted };
}
