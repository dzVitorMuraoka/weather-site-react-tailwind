export interface forecastEntryDTO {
  time: string;
  values: {
    temperature: number;
  };
}

export interface hourlyForecastDTO {
  forecast: forecastEntryDTO[];
}
