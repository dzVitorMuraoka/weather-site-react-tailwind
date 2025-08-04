export interface dailyForecastDTO {
  dailyForecast: dailyEntryForecastDTO[];
}

export interface dailyEntryForecastDTO {
  time: string;
  values: {
    temperatureMax: number;
    temperatureMin: number;
  };
}
