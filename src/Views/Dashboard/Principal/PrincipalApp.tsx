import ClimateIconAndDescription from "./ClimateIconAndDescription";
import CurrentTemperature from "./CurrentTemperature"
import PrincipalInformations from "./PrincipalInformations"
type PrincipalProps = {
  climateCondition: string;
  localName: string;
  description: string;
  temperature: number;
  probabilityOfPrecipitation: number;
  countryName: string;

}
const Principal = ({climateCondition, localName, description, temperature, probabilityOfPrecipitation, countryName}:PrincipalProps) => {
  return (
    <div className="flex ">
      <div className="flex-auto space-y-16 mx-5">
        <PrincipalInformations 
        localName={localName}
        countryName={countryName}
        pop = {probabilityOfPrecipitation}

        />
         <CurrentTemperature 
         temperature={temperature}
         />
      </div>
      <div className="flex-1 flex justify-center w-min">
      <ClimateIconAndDescription
      climateCondition={`./src/assets/climateCondition.png`}
      description= {description}
      /> 
      </div>
    </div>
  )
}

export default Principal
