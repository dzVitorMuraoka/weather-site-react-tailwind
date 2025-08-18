type HorizontalBoxProps = {
  humidityIcon: string;
  uvIcon: string;
  sunsetIcon: string;
  airQualityIcon: string;
  pressureIcon: string;
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
  aqi,
  pressureIcon,
}: HorizontalBoxProps) => {
  return (
    <div>
      <div className="flex bg-bg-containers max-w-[1100px] px-4 mx-auto overflow-x-auto scrollbar-hide h-min rounded-xl">
        <div className="flex gap-6 w-full mt-4 mb-4">
          {/* container in which it going be information blocks about current weahter */}
          <div className="flex flex-col min-w-[138px] items-center justify-center">
            {/* humidity block */}
            <img className="w-8 h-8" src={humidityIcon} />
            <span className="font-semibold text-white text-lg">
              {humidity}%
            </span>
          </div>
          <div className="flex flex-col min-w-[138px] items-center justify-center">
            {/*feels like block */}
            <span className="font-semibold text-white text-sm">
              Sensação Térmica
            </span>
            <span className="font-semibold text-white text-xl">
              {temperatureApparent}°C
            </span>
          </div>
          <div className="flex flex-col min-w-[138px] items-center justify-center">
            {/*uv index block */}
            <img className="w-8 h-8" src={uvIcon} />
            <span className="font-semibold text-white text-lg">{uvDegree}</span>
          </div>
          <div className="flex flex-col min-w-[138px] items-center justify-center">
            {/* sunset block */}
            <img className="w-8 h-8" src={sunsetIcon} />
            <span className="font-semibold text-white text-lg">{sunset}</span>
          </div>
          <div className="flex flex-col min-w-[138px] items-center justify-center">
            {/*airquality block */}
            <img className="w-8 h-8" src={airQualityIcon} />
            <span className="font-semibold text-white text-lg">{aqi}</span>
          </div>
          <div className="flex flex-col min-w-[138px] items-center justify-center">
            {/*pressure block */}
            <img className="w-8 h-8" src={pressureIcon} />
            <span className="font-semibold text-white text-lg">1 atm</span>
          </div>
          <div className="flex flex-col min-w-[100px] items-center justify-center">
            {/*pressure block */}
            <img className="w-8 h-8" src={pressureIcon} />
            <span className="font-semibold text-white text-lg">1 atm</span>
          </div>
          <div className="flex flex-col min-w-[100px] items-center justify-center">
            {/*pressure block */}
            <img className="w-8 h-8" src={pressureIcon} />
            <span className="font-semibold text-white text-lg">1 atm</span>
          </div>
          <div className="flex flex-col min-w-[100px] items-center justify-center">
            {/*pressure block */}
            <img className="w-8 h-8" src={pressureIcon} />
            <span className="font-semibold text-white text-lg">1 atm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalBox;
