import { useState } from "react";
import MenuLateralComponent from "./AsideMenu/AsideMenuComponent";
import PrincipalApp from "./Principal/PrincipalApp";
import SearchBarComponent from "./SearchBarComponent";
import type { dashboardDTO } from "../../types/dashboard";
import { getWeatherData } from "../../services/dashboardService";
import HorizontalBox from "./HorizontalSpecifications/HorizontalBox";
import HourlyForecast from "./hourlyForecast/HorizontalHourlyForecast";
import DailyForecastsContainer from "./DailyForecasts/DailyForecastsContainer";

type formattedHourlyForecast = {
  time: string;
  temperature: number;
};
type DailyForecast = {
  time: string;
  tempMax: number;
  tempMin: number;
};
type DashboarAppProps = {
  logoWeather: string;
  iconeCidades: string;
  iconeMap: string;
  iconeConfig: string;
  iconeProfile: string;
  searchIcon: string;
  climateCondition: string;
  humidityIcon: string;
  uvIcon: string;
  sunsetIcon: string;
  airQualityIcon: string;
  sun: string;
  forecastCondition: string;
  uvDegree: string;
  sunset: string;
};

const DashboarApp = ({
  logoWeather,
  iconeCidades,
  iconeConfig,
  iconeMap,
  iconeProfile,
  uvIcon,
  forecastCondition,
  sun,
  airQualityIcon,
  sunsetIcon,
  searchIcon,
  humidityIcon,
}: DashboarAppProps) => {
  const [overviewData, setOverviewData] = useState<dashboardDTO | null>(null);
  const [formattedDailyForecast, setDaily] = useState<DailyForecast[]>([]);
  const [formattedHourlyForecast, setFormatted] = useState<
    formattedHourlyForecast[]
  >([]);
  const handleSearch = async (city: string) => {
    try {
      const fetchData = await getWeatherData(city);
      setOverviewData(fetchData);

      const forecastHandle = fetchData.forecast.slice(0, 6).map((item) => {
        return {
          time: formatHourLabel(item.time),
          temperature: Math.round(item.values.temperature),
        };
      });

      const dailyForecastHandle = fetchData.dailyForecast.map((item) => {
        return {
          time: formatWeekday(item.time),
          tempMax: Math.trunc(item.values.temperatureMax),
          tempMin: Math.trunc(item.values.temperatureMin),
        };
      });
      setDaily(dailyForecastHandle);
      setFormatted(forecastHandle);
    } catch (error) {
      console.error(error);
    }
  };

  function formatHourLabel(isoDateString: string) {
    const date = new Date(isoDateString);
    const localHour = date.getHours();
    return `${localHour}h`;
  }

  function formatWeekday(dailyForecast: string) {
    const portugueseWeekdays = [
      "Dom",
      "Seg",
      "Ter",
      "Qua",
      "Qui",
      "Sex",
      "Sab",
    ];

    const date = new Date(dailyForecast);
    const weekdayName = portugueseWeekdays[date.getUTCDay()];

    return weekdayName;
  }

  return (
    <div className="bg-bg-dashboard-home h-screen overflow-hidden grid  grid-cols-[120px_1fr_400px]">
      <MenuLateralComponent
        logoWeather={logoWeather}
        iconeCidades={iconeCidades}
        iconeConfig={iconeConfig}
        iconeMap={iconeMap}
        iconeProfile={iconeProfile}
      />
      <div className="flex-1 flex flex-col gap-6 w-11/12 ">
        <SearchBarComponent searchIcon={searchIcon} onSearch={handleSearch} />
        <PrincipalApp
          localName={overviewData?.localName || "Waiting"}
          countryName={overviewData?.countryName || "Waiting"}
          probabilityOfPrecipitation={
            overviewData?.probabilityOfPrecipitation || 0o0
          }
          description={overviewData?.description || "Waiting"}
          temperature={overviewData?.temperature || 0o0}
          climateCondition="./src/assets/climateCondition.png"
        />

        <HorizontalBox
          humidityIcon={humidityIcon}
          uvIcon={uvIcon}
          sunsetIcon={sunsetIcon}
          airQualityIcon={airQualityIcon}
          humidity={overviewData?.humidity}
          uvIndex={overviewData?.uvIndex}
          temperatureApparent={overviewData?.temperatureApparent}
          uvDegree={overviewData?.uvDegree}
          sunset={overviewData?.sunset}
          aqi={overviewData?.airQuality}
        />

        <HourlyForecast forecastArray={formattedHourlyForecast} sun={sun} />
      </div>

      <div className="py-4">
        <DailyForecastsContainer forecastCondition={forecastCondition}
        dailyArray={formattedDailyForecast}
         />
      </div>
    </div>
  );
};

export default DashboarApp;
