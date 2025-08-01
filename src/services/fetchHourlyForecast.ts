import type { hourlyForecastDTO } from "../types/hourlyForecastDTO";

export async function fetchHourlyForecast(
  location: string
): Promise<hourlyForecastDTO> {
  const url = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=A9jACd3dteXNmKj7fUM63wSJsrJroRpn`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "accept-encoding": "deflate, gzip, br",
    },
  };

  const response = await fetch(url, options).then((res) => res.json());

  console.log(response);
  return {
    forecast: response.timelines.hourly,
  };
}
