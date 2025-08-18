import { useEffect, useState } from "react";
import MenuLateralComponent from "./AsideMenu/AsideMenuComponent";
import PrincipalApp from "./Principal/PrincipalApp";
import SearchBarComponent from "./SearchBarComponent";
import type { dashboardDTO } from "types/dashboard";
import { getWeatherData } from "../../services/dashboardService";
import HorizontalBox from "./HorizontalSpecifications/HorizontalBox";
import HourlyForecast from "./HourlyForecast/HorizontalHourlyForecast";
import DailyForecastsContainer from "./DailyForecasts/DailyForecastsContainer";
import { formatHour } from "../../utils/format_hour";
import { formatWeekday } from "../../utils/format_weekday";
import {
  getDescriptionAndIcon,
  isDayTime,
  weatherCodeMap,
} from "../../utils/table_description_icon";
import { getCityNameByCoord } from "../../services/openWeatherAPI";
import BoxSpecificationApp from "./boxsSpecifications.tsx/BoxSpecificationApp";

type formattedHourlyForecast = {
  time: string;
  temperature: number;
};

type DailyForecast = {
  time: string;
  tempMax: number;
  tempMin: number;
  weatherCode: number;
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
  pressureIcon: string;
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
  airQualityIcon,
  sunsetIcon,
  searchIcon,
  humidityIcon,
  pressureIcon,
}: DashboarAppProps) => {
  const [overviewData, setOverviewData] = useState<dashboardDTO | null>(null);
  const [, setCityName] = useState("");
  const [principalDescription, setPrincipalDescription] = useState("");
  const [principalIcon, setPrincipalIcon] = useState("");
  const [formattedDailyForecast, setDaily] = useState<DailyForecast[]>([]);
  const [formattedHourlyForecast, setFormatted] = useState<
    formattedHourlyForecast[]
  >([]);

  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await getCityNameByCoord(latitude, longitude);
          setCityName(response.cityName);
          await handleSearch(response.cityName);
        });
      }
    };

    fetchLocationAndWeather();
  }, []);

  const handleSearch = async (city: string) => {
    try {
      const fetchData = await getWeatherData(city);
      setOverviewData(fetchData);

      const forecastHandle = fetchData.forecast.slice(0, 10).map((item) => {
        return {
          time: formatHour(item.time),
          temperature: Math.round(item.values.temperature),
        };
      });

      const dailyForecastHandle = fetchData.dailyForecast.map((item) => {
        return {
          time: formatWeekday(item.time),
          tempMax: Math.trunc(item.values.temperatureMax),
          tempMin: Math.trunc(item.values.temperatureMin),
          weatherCode: item.values.weatherCodeMax,
        };
      });

      const weatherInfo = weatherCodeMap[fetchData.weatherCode];
      if (weatherInfo) {
        const ifIsDay = isDayTime(fetchData.sunrise, fetchData.sunset);
        const details = getDescriptionAndIcon(fetchData.weatherCode, ifIsDay);
        setPrincipalDescription(details.description);
        setPrincipalIcon(`${details.icon}`);
      } else {
        setPrincipalDescription("Nothing yet");
        setPrincipalIcon("./src/assets/climatempo.png");
      }
      setDaily(dailyForecastHandle);
      setFormatted(forecastHandle);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-bg-dashboard-home h-screen space-y-reverse space-y-10 custom-1100:grid-rows-1 custom-xl:space-y-0 overflow-y-auto overflow-x-hidden grid grid-cols-1 custom-md:grid-cols-1 custom-mdp:grid-rows-custom-mdp-row-layout custom-1100:grid-cols-custom-1100-layout custom-xl:grid-cols-custom-layout">
      <div className="custom-1100:px-1 custom-1100:flex custom-1100:col-span-1 custom-1100:order-1 custom-xl:flex custom-xl:col-span-1 order-1 ">
        <MenuLateralComponent
          logoWeather={logoWeather}
          iconeCidades={iconeCidades}
          iconeConfig={iconeConfig}
          iconeMap={iconeMap}
          iconeProfile={iconeProfile}
        />
      </div>

      <div className="flex-1 flex flex-col gap-6 px-5 custom-1100:flex  custom-xl:px-0 py-3 order-2 custom-xl:max-w-[830px] custom-mdp:order-1">
        <SearchBarComponent searchIcon={searchIcon} onSearch={handleSearch} />

        <div className="mb-11 custom-xl:mb-8">
          <PrincipalApp
            localName={overviewData?.localName || "Waiting"}
            countryName={overviewData?.countryName || "Waiting"}
            probabilityOfPrecipitation={
              overviewData?.probabilityOfPrecipitation || 0o0
            }
            description={principalDescription}
            temperature={overviewData?.temperature || 0o0}
            weatherIcon={principalIcon}
          />
        </div>
        <div>
          <div className="hidden custom-800:flex flex-col">
            <HorizontalBox
              humidityIcon={humidityIcon}
              humidity={overviewData?.humidity}
              temperatureApparent={overviewData?.temperatureApparent}
              uvIcon={uvIcon}
              uvDegree={overviewData?.uvDegree}
              sunsetIcon={sunsetIcon}
              sunset={overviewData?.formattedSunset}
              airQualityIcon={airQualityIcon}
              aqi={overviewData?.airQuality}
              pressureIcon={pressureIcon}
            />
          </div>
          <div className="mt-4">
            <HourlyForecast forecastArray={formattedHourlyForecast} />
          </div>

          <div className="mt-10 custom-xl:mt-5">
            <div className="custom-800:hidden">
              <BoxSpecificationApp
                humidityIcon={humidityIcon}
                humidity={overviewData?.humidity}
                temperatureApparent={overviewData?.temperatureApparent}
                uvIcon={uvIcon}
                uvDegree={overviewData?.uvDegree}
                sunsetIcon={sunsetIcon}
                sunset={overviewData?.formattedSunset}
                airQualityIcon={airQualityIcon}
                aqi={overviewData?.airQuality}
                pressureIcon={pressureIcon}
              />
            </div>
          </div>

          <div className="flex items-center flex-col justify-center mt-6 mx-1 order-3 custom-xl:col-auto custom-xl:hidden">
            <DailyForecastsContainer dailyArray={formattedDailyForecast} />
          </div>
        </div>
      </div>

      <div className="hidden custom-xl:order-3 custom-xl:flex items-center flex-col justify-center  mt-6 mx-8">
        <DailyForecastsContainer dailyArray={formattedDailyForecast} />
      </div>
    </div>
  );
};

export default DashboarApp;
