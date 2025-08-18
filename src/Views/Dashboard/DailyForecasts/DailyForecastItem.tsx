type DailyForecastItemProps = {
  icon: string;
  tempMax: number;
  tempMin: number;
  day: string;
};
const DailyForecastItem = ({
  icon,
  tempMax,
  tempMin,
  day,
}: DailyForecastItemProps) => {
  return (
    <div className="bg-daily-forecast-item/10 w-auto h-min rounded-lg">
      <div className="grid grid-cols-3 items-center justify-center">
        <span className="text-white text-xl font-medium mx-4">{day}</span>

        <div className="justify-self-center">
          <img className="w-16 h-16 mx-3" src={icon} />
        </div>

        <div className="flex justify-end space-x-1 mr-2">
          <span className="text-white text-lg font-semibold">{tempMax}</span>
          <span className="text-white text-lg">/</span>
          <span className="text-white text-lg text-normal">{tempMin}</span>
          <span className="text-white text-lg font-semibold">°C</span>
        </div>
      </div>
    </div>
  );
};

export default DailyForecastItem;
