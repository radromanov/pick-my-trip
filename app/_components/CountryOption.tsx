import { Country } from "@/lib/schema";
import React from "react";

interface Props {
  country: Country;
}

const CountryOption = ({ country }: Props) => {
  return (
    <option key={country.id}>
      {country.flag}
      {country.name}
    </option>
  );
};

export default CountryOption;
