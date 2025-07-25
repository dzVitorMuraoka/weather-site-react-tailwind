export async function getWeatherByCity(location:string){
    const apiKey = `c1d25f1ecdb61a3ddbf6ece60184190a`
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=pt`

    try {
        const response = await fetch(apiUrl);

        return response.json();
    } catch (error) {
        console.error("Erro: ", error);
    }
}