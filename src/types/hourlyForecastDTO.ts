export interface forecastEntryDTO {
  time: string;
  values: {
    temperature: number;
    weatherCode:number;  
  };
}

export interface hourlyForecastDTO {
  forecast: forecastEntryDTO[];
}
