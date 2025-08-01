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
        humidity: json.timelines.minutely[0].values.humidity,
        temperatureApparent: json.timelines.minutely[0].values.temperatureApparent,
        uvIndex: json.timelines.minutely[0].values.uvIndex
    }
}

export function degreesOfUV(uvIndex:number):string{
  if(uvIndex>=0 && uvIndex<= 2){
    return 'Baixo';
  } else if(uvIndex>=3 && uvIndex<=5){
    return 'Moderado';
  } else if(uvIndex>=6 && uvIndex<=7){
    return 'Alto';
  } else if(uvIndex>=8 && uvIndex<=10){
    return 'Muito alto';
  } else if(uvIndex>=11){
    return 'Extremo';
  } else{
    return 'Valor inválido'
  }
}