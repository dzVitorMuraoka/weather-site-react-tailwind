import type { tomorrowIoDTO} from "../types/tomorrowIoDTO";

export async function fetchTomorrowIoData(location:string):Promise<tomorrowIoDTO>{
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&units=metric&apikey=A9jACd3dteXNmKj7fUM63wSJsrJroRpn`;
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'accept-encoding': 'deflate, gzip, br'}
};

const response = await fetch(url, options)
const json = await response.json()
    console.log(json)
    return{
        temperature:json.timelines.minutely[0].values.temperature ,
        probabilityOfPrecipitation: json.timelines.minutely[0].values.precipitationProbability,
        lat: json.location.lat,
        lon:json.location.lon
    }
}