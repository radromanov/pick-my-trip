import { db } from "@/lib/drizzle";
import { Country, countries } from "@/lib/schema";
import CountryOption from "./CountryOption";

const CountrySelector = async () => {
  const allCountries: Country[] = await db.select().from(countries);
  const sortedCountries = allCountries.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const response = await fetch(
    "https://countriesnow.space/api/v0.1/countries/cities",

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country: "nigeria" }),
    }
  );
  const data = await response.json();

  console.log(data);

  return (
    <select name="country" id="country" className="w-full text-black">
      {sortedCountries.map((country) => (
        <CountryOption key={country.id} country={country} />
      ))}
    </select>
  );
};

export default CountrySelector;
