import type { dashboardDTO } from "../types/dashboard";
import { fetchHourlyForecast } from "./fetchHourlyForecast";
import { fetchOpenWeatherData } from "./openWeatherAPI";
import { fetchRestCountriesApi } from "./restCountriesAPI";
import { fetchTomorrowIoData } from "./tomorrowIoAPI";
import { degreesOfUV } from "./tomorrowIoAPI";
import { sunSetHour } from "./openWeatherAPI";
import { fetchAirQuality } from "./ninjasAPI";
import { degreeofAirQ } from "./ninjasAPI";
import { fetchDailyForecast } from "./fetchDailyForecast";
export async function getWeatherData(location: string): Promise<dashboardDTO> {
  const [tomorrowIo, openWeather, hourlyForecast, airQuality, dailyForecast] =
    await Promise.all([
      fetchTomorrowIoData(location),
      fetchOpenWeatherData(location),
      fetchHourlyForecast(location),
      fetchAirQuality(location),
      fetchDailyForecast(location),
    ]);
  const countryName = await fetchRestCountriesApi(openWeather.countryCode);

  return {
    temperature: tomorrowIo.temperature,
    probabilityOfPrecipitation: tomorrowIo.probabilityOfPrecipitation,
    description: openWeather.description,
    localName: openWeather.localName,
    countryName: countryName.countryName,
    forecast: hourlyForecast.forecast,
    dailyForecast: dailyForecast.dailyForecast,
    uvIndex: tomorrowIo.uvIndex,
    uvDegree: degreesOfUV(tomorrowIo.uvIndex),
    temperatureApparent: Math.trunc(tomorrowIo.temperatureApparent),
    humidity: tomorrowIo.humidity,
    sunset: sunSetHour(openWeather.sunset),
    airQuality: degreeofAirQ(airQuality.overall_aqi),
  };
}
