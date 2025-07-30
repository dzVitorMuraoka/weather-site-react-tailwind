import axios from "axios"
import type { restCountriesDTO } from "../types/restCountriesDTO"

export async function fetchRestCountriesApi(code:string):Promise<restCountriesDTO>{
    const apiUrl =`https://restcountries.com/v3.1/alpha/${code}`
    const response = (await axios.get(apiUrl)).data[0]
    console.log(response)
    return{
        countryName: response.name.common
    }
}