import HourlyItem from "./HorizontalHourlyItem"
type ForecastItem = {
  time: string;
  temperature: number;

}
type hourlyForecast = {
  sun: string;
  forecastArray?: ForecastItem[];
}
const hourlyForecast = ({ sun, forecastArray }: hourlyForecast) => {


  return (
    <div>
      <div
        className="flex justify-between w-full h-8">

        {forecastArray?.map((item, index) => (
          

          <HourlyItem
            sun={sun}
            key={index}
            hour={item.time}
            temp={item.temperature}
          />


        ))}





      </div>
    </div>
  )
}

export default hourlyForecast
