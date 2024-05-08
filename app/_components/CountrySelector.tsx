import { db } from "@/lib/drizzle";
import { Country, countries } from "@/lib/schema";

const CountrySelector = async () => {
  const allCountries: Country[] = await db.select().from(countries);
  const sortedCountries = allCountries.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <select name="country" id="country" className="w-full text-black">
      {sortedCountries.map((country, i) => (
        <option key={country.id}>
          {country.flag}
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountrySelector;
