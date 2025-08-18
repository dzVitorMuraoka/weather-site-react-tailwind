import type { openWeatherDTO } from "../types/openWeatherDTO";
import axios from "axios";

type convertCoordProps = {
  cityName: string;
}


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
    sunrise: response.data.sys.sunrise,
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

export function sunriseHour(sunrise:number): string{
  const timestamp = sunrise;
   const date = new Date(timestamp * 1000);
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const formattedSunrise = `${hour.toString().padStart(2)}h${minutes
    .toString()
    .padStart(2)}min`;

  return formattedSunrise;
}

export async function getCityNameByCoord(lat: number, lon: number): Promise<convertCoordProps>{
  const apiKey = `c1d25f1ecdb61a3ddbf6ece60184190a`;
  const apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt`;

  const response = await axios.get(apiUrlCity);
  console.log(response.data)
  
  return {
    cityName: response.data.name,
  }
}