type HorizontalBoxProps = {
  humidityIcon: string;
  uvIcon: string;
  sunsetIcon: string;
  airQualityIcon: string;
  humidity?: number;
  uvIndex?: number;
  temperatureApparent?: number;
  uvDegree?: string;
  sunset?: string;
  aqi?: string;
};

const HorizontalBox = ({
  humidityIcon,
  uvIcon,
  sunsetIcon,
  airQualityIcon,
  humidity,
  uvIndex,
  uvDegree,
  temperatureApparent,
  sunset,
  aqi
}: HorizontalBoxProps) => {
  return (
    <div>
      <div className="flex bg-bg-containers w-full h-min rounded-xl">
        <div className="flex justify-around w-full mt-4 mb-4">
          {" "}
          {/* container in which it going be information blocks about current weahter */}
          <div className="flex flex-col flex-grow flex-1 items-center justify-center">
            {" "}
            {/* humidity block */}
            <img className="w-8 h-8" src={humidityIcon} />
            <span className="font-semibold text-white text-lg">{humidity}%</span>
          </div>
          <div className="flex flex-col flex-grow flex-1 items-center justify-center">
            {" "}
            {/*feels like block */}
            <span className="font-semibold text-white text-sm ">
              Sensação Térmica
            </span>
            <span className="font-semibold text-white text-xl">{temperatureApparent}°C</span>
          </div>
          <div className="flex flex-col flex-grow flex-1 items-center justify-center">
            {" "}
            {/*uv index block */}
            <img className="w-8 h-8" src={uvIcon} />
            <span className="font-semibold text-white text-lg">{uvDegree}</span>
          </div>
          <div className="flex flex-col flex-grow flex-1 items-center justify-center">
            {" "}
            {/* sunset block */}
            <img className="w-8 h-8" src={sunsetIcon} />
            <span className="font-semibold text-white text-lg">{sunset}</span>
          </div>
          <div className="flex flex-col flex-grow flex-1 items-center justify-center">
            {" "}
            {/*airquality block */}
            <img className="w-8 h-8" src={airQualityIcon} />
            <span className="font-semibold text-white text-lg">{aqi}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalBox;
