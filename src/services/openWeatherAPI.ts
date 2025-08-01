import type { openWeatherDTO } from "../types/openWeatherDTO";
import axios from "axios";
export async function fetchOpenWeatherData(
  location: string
): Promise<openWeatherDTO> {
  const apiKey = `c1d25f1ecdb61a3ddbf6ece60184190a`;
  const apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=pt`;

  const response = await axios.get(apiUrlCity);
  // console.log(response)
  return {
    countryCode: response.data.sys.country,
    description: response.data.weather[0].description,
    localName: response.data.name,
    sunset: response.data.sys.sunset,
  };
}

export function sunSetHour(sunset: number): string {
  const timestamp = sunset;
  const date = new Date(timestamp * 1000);
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const formattedSunset = `${hour.toString().padStart(2)}h${minutes
    .toString()
    .padStart(2)}min`;

  return formattedSunset;
}
