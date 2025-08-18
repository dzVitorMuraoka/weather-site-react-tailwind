type boxSpecificationAppProps = {
  humidityIcon: string;
  humidity?: number;
  temperatureApparent?: number;
  uvIcon?: string;
  uvDegree?: string;
  sunsetIcon?: string;
  sunset?: string;
  airQualityIcon?: string;
  aqi?: string;
  pressureIcon?: string;
};

const boxSpecificationApp = ({
  humidityIcon,
  humidity,
  temperatureApparent,
  uvIcon,
  uvDegree,
  sunsetIcon,
  sunset,
  airQualityIcon,
  aqi,
  pressureIcon,
}: boxSpecificationAppProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-bg-containers rounded-xl py-1 flex-col flex items-center justify-center ">
        {/* humidity block */}
        <img className="w-8 h-8" src={humidityIcon} />
        <span className="font-semibold text-white text-lg">{humidity}%</span>
      </div>

      <div className="bg-bg-containers rounded-xl py-1 flex-col flex items-center justify-center">
        {/* humidity block */}
        <span className="font-semibold text-white text-sm">
          Sensação Térmica
        </span>
        <span className="font-semibold text-white text-lg">
          {temperatureApparent}°C
        </span>
      </div>

      <div className="bg-bg-containers rounded-xl py-1 flex-col flex items-center justify-center ">
        {/* humidity block */}
        <img className="w-8 h-8" src={uvIcon} />
        <span className="font-semibold text-white text-lg">{uvDegree}</span>
      </div>

      <div className="bg-bg-containers rounded-xl py-1 flex-col flex items-center justify-center ">
        {/* humidity block */}
        <img className="w-8 h-8" src={sunsetIcon} />
        <span className="font-semibold text-white text-lg">{sunset}</span>
      </div>

      <div className="bg-bg-containers rounded-xl py-1 flex-col flex items-center justify-center ">
        {/* humidity block */}
        <img className="w-8 h-8" src={airQualityIcon} />
        <span className="font-semibold text-white text-lg">{aqi}</span>
      </div>

      <div className="bg-bg-containers rounded-xl py-1 flex-col flex items-center justify-center ">
        {/* humidity block */}
        <img className="w-8 h-8" src={pressureIcon} />
        <span className="font-semibold text-white text-lg">1 atm</span>
      </div>
    </div>
  );
};

export default boxSpecificationApp;
