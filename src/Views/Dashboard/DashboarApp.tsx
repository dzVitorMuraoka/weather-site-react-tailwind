import  { useState } from "react";
import { getWeatherByCity } from "../../API/openWeatherAPI";
import MenuLateralComponent from "./AsideMenu/AsideMenuComponent"
import PrincipalApp from "./Principal/PrincipalApp";
import SearchBarComponent from "./SearchBarComponent";

type DashboarAppProps = {
  logoWeather: string;
  iconeCidades: string;
  iconeMap: string;
  iconeConfig: string;
  iconeProfile: string;
  searchIcon: string;
  climateCondition: string;

}


const DashboarApp = ({ logoWeather, iconeCidades, iconeConfig, iconeMap, iconeProfile, searchIcon, climateCondition, }: DashboarAppProps) => {
  const [weatherData, setWeatherData] = useState("");
  const handleSearch = async (city: string) => {
    const data = await getWeatherByCity(city);
    setWeatherData(data);
    console.log(data);
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
      <div className="flex-1 flex flex-col gap-6 ">
        <SearchBarComponent
          searchIcon={searchIcon}
          onSearch={handleSearch}
        />
        <PrincipalApp
          weatherData = {weatherData}
          climateCondition={climateCondition}
        />
      </div>

    </div>
  )
}

export default DashboarApp
