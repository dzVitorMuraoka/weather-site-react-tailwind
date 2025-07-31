import { useState } from "react";
import MenuLateralComponent from "./AsideMenu/AsideMenuComponent"
import PrincipalApp from "./Principal/PrincipalApp";
import SearchBarComponent from "./SearchBarComponent";
import type { dashboardDTO } from "../../types/dashboard";
import { getWeatherData } from "../../services/dashboardService";
import HorizontalBox from "./HorizontalSpecifications/HorizontalBox";

type DashboarAppProps = {
  logoWeather: string;
  iconeCidades: string;
  iconeMap: string;
  iconeConfig: string;
  iconeProfile: string;
  searchIcon: string;
  climateCondition: string;
  humidityIcon: string;
  uvIcon:string;
  sunsetIcon:string;
  airQualityIcon: string;
}


const DashboarApp = ({ logoWeather, iconeCidades, iconeConfig, iconeMap, iconeProfile,uvIcon,airQualityIcon,sunsetIcon, searchIcon, humidityIcon, climateCondition, }: DashboarAppProps) => {
  const [overviewData, setOverviewData] = useState<dashboardDTO | null>(null);
  const handleSearch = async (city: string) => {

    try {
      const fetchData = await getWeatherData(city);
      setOverviewData(fetchData)
    } catch (error) {
      console.error(error)
    }
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
        <SearchBarComponent
          searchIcon={searchIcon}
          onSearch={handleSearch}
        />
        <PrincipalApp
          localName={overviewData?.localName || "Waiting"}
          countryName={overviewData?.countryName || "Waiting"}
          probabilityOfPrecipitation={overviewData?.probabilityOfPrecipitation || 0o0}
          description={overviewData?.description || "Waiting"}
          temperature={overviewData?.temperature || 0o0}
          climateCondition="./src/assets/climateCondition.png"

        />

        <HorizontalBox
          humidityIcon={humidityIcon}
          uvIcon={uvIcon}
          sunsetIcon={sunsetIcon}
          airQualityIcon={airQualityIcon}
        />
      </div>

    </div>
  )
}

export default DashboarApp
