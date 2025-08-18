import ClimateIconAndDescription from "./ClimateIconAndDescription";
import CurrentTemperature from "./CurrentTemperature";
import PrincipalInformations from "./PrincipalInformations";
type PrincipalProps = {
  weatherIcon: string;
  localName: string;
  description: string;
  temperature: number;
  probabilityOfPrecipitation: number;
  countryName: string;
};
const Principal = ({
  weatherIcon,
  localName,
  description,
  temperature,
  probabilityOfPrecipitation,
  countryName,
}: PrincipalProps) => {
  return (
    <div className="flex-col flex justify-center items-center gap-3 custom-mdp:flex-row max-w-[1190px]">
      <div className="custom-mdp:flex-row flex-1 space-y-14 flex-row mx-3">
        <PrincipalInformations
          localName={localName}
          countryName={countryName}
          pop={probabilityOfPrecipitation}
        />
        <div className="hidden custom-mdp:block">
          <CurrentTemperature temperature={temperature} />
        </div>
      </div>
      <div className="mx-6">
        <ClimateIconAndDescription
          weatherIcon={weatherIcon}
          description={description}
        />
      </div>

      <div className="custom-mdp:hidden">
        <CurrentTemperature temperature={temperature} />
      </div>
    </div>
  );
};

export default Principal;
