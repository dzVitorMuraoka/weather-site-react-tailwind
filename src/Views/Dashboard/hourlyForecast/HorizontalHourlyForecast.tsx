import HourlyItem from "./HorizontalHourlyItem";
type ForecastItem = {
  time: string;
  temperature: number;
};
type hourlyForecast = {
  forecastArray?: ForecastItem[];
};
const hourlyForecast = ({ forecastArray }: hourlyForecast) => {
  return (
    <div>
      <div className="flex justify-between max-w-[1100px] w-full mx-auto h-min">
        <ul className="flex flex-row gap-3 custom-md:gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {forecastArray?.map((item, index) => {
            return (
              <li key={index}>
                <HourlyItem hour={item.time} temp={item.temperature} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default hourlyForecast;
