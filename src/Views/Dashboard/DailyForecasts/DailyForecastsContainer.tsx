import { getDescriptionAndIcon } from "../../../utils/table_description_icon";
import DailyForecastItem from "./DailyForecastItem";
type dailyForecastItem = {
  time: string;
  tempMax: number;
  tempMin: number;
  weatherCode: number;
};
type DailyForecastsContainerProps = {
  dailyArray?: dailyForecastItem[];
};
const DailyForecastsContainer = ({
  dailyArray,
}: DailyForecastsContainerProps) => {

  return (
    
      <div className="grid grid-cols-1 items-center justify-center flex-row bg-bg-containers rounded-xl w-full max-w-screen-custom-mdp h-min ">
        <span className="text-white text-center text-xl font-normal mt-2">
          Próximos 7 dias
        </span>
        <div className="flex-1 space-y-4 px-4 py-5">
          {dailyArray?.map((item, index) => {
            const weatherInfo = getDescriptionAndIcon(item.weatherCode, true);

            return (
              <DailyForecastItem
                icon={weatherInfo.icon}
                key={index}
                day={item.time}
                tempMax={item.tempMax}
                tempMin={item.tempMin}
              />
            );
          })}
        </div>
      </div>
  
  );
};

export default DailyForecastsContainer;
