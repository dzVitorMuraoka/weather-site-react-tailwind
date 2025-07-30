import type { dashboardDTO } from "../types/dashboard";
import { fetchOpenWeatherData } from "./openWeatherAPI";
import { fetchRestCountriesApi } from "./restCountriesAPI";
import { fetchTomorrowIoData } from "./tomorrowIoAPI";

export async function getWeatherData(location: string): Promise<dashboardDTO> {
    try {
        const [tomorrowIo, openWeather] = await Promise.all([
            fetchTomorrowIoData(location), 
            fetchOpenWeatherData(location)
        ])
        const countryName = await fetchRestCountriesApi(openWeather.countryCode);

        return {
            temperature: tomorrowIo.temperature,
            probabilityOfPrecipitation: tomorrowIo.probabilityOfPrecipitation,
            description: openWeather.description,
            localName: openWeather.localName,
            countryName: countryName.countryName,
        }
    } catch (error) {
        console.error('Error fetching weather or country data:', error);
        throw error;
    }
}