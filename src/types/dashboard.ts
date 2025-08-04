import type { dailyEntryForecastDTO } from "./dailyForecastDTO";
import type { forecastEntryDTO } from "./hourlyForecastDTO";

export interface dashboardDTO{
    temperature: number,
    probabilityOfPrecipitation: number;
    description: string;
    countryName: string;
    localName: string;
    forecast: forecastEntryDTO[];
    dailyForecast: dailyEntryForecastDTO[];
    temperatureApparent: number;
    humidity: number;
    uvIndex: number;
    uvDegree: string;
    sunset: string;
    airQuality:string;
}