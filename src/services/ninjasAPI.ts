import type { ninjasApiDTO } from "../types/ninjasApiDTO";

export async function fetchAirQuality(location: string): Promise<ninjasApiDTO> {
  const apiKey = "tms381GuDezi8q8uhVArYg==FdEgezOVclj8NO9R";
  const apiUrl = `https://api.api-ninjas.com/v1/airquality?city=${encodeURIComponent(
    location
  )}`;
  const options = {
    headers: { "X-Api-Key": `${apiKey}` },
  };

  const response = await fetch(apiUrl, options).then((res) => res.json());

  console.log(response);

  return response;
}

export function degreeofAirQ(aqi: number): string {
  if (aqi >= 0 && aqi <= 40) {
    return "Boa";
  } else if (aqi >= 41 && aqi <= 80) {
    return "Moderada";
  } else if (aqi >= 81 && aqi <= 120) {
    return "Ruim";
  } else if (aqi >= 121 && aqi <= 200) {
    return "Muito ruim";
  } else if (aqi >= 201 && aqi <= 400) {
    return "Péssima";
  } else if (aqi > 400) {
    return "Crítica";
  } else {
    return "Valor inválido";
  }
}
