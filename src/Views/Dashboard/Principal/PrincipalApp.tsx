import ClimateIconAndDescription from "./ClimateIconAndDescription";
import CurrentTemperature from "./CurrentTemperature"
import PrincipalInformations from "./PrincipalInformations"
type PrincipalProps = {
  climateCondition: string;
  weatherData: any;
}
const Principal = ({climateCondition, weatherData}:PrincipalProps) => {
  return (
    <div className="flex ">
      <div className="flex-auto space-y-16 mx-5">
        <PrincipalInformations 
        data={weatherData}
        />
         <CurrentTemperature 
         data={weatherData}
         />
      </div>
      <div className="flex-1">
      <ClimateIconAndDescription
      climateCondition={climateCondition}
      /> 
      </div>
    </div>
  )
}

export default Principal
