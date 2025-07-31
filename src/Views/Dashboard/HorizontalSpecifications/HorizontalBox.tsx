type HorizontalBoxProps ={
    humidityIcon: string;
    uvIcon: string;
    sunsetIcon: string;
    airQualityIcon: string;
}



const HorizontalBox = ({humidityIcon, uvIcon, sunsetIcon, airQualityIcon}:HorizontalBoxProps) => {
  return (
    <div>
      <div
      className="flex bg-bg-containers w-full h-min rounded-xl">
        <div className="flex justify-around w-full mt-4 mb-4"> {/* container in which it going be information blocks about current weahter */}
                <div className="flex flex-col flex-grow flex-1 items-center justify-center"> {/* humidity block */}
                     <img 
                     className="w-8 h-8"
                     src = {humidityIcon}
                     />
                <span className="font-semibold text-white text-lg">60%</span>
                </div>


                <div className="flex flex-col flex-grow flex-1 items-center justify-center">
                    <span className="font-normal text-white text-sm ">Sensação <br/> Térmica <br/> </span>
                    <span className="font-semibold text-white text-lg">20 °C</span>
                </div>

                     <div className="flex flex-col flex-grow flex-1 items-center justify-center"> {/*UV block */}
                     <img 
                     className="w-8 h-8"
                     src = {uvIcon}
                     />
                <span className="font-semibold text-white text-lg">Média</span>
                </div>

                <div className="flex flex-col flex-grow flex-1 items-center justify-center"> {/*UV block */}
                     <img 
                     className="w-8 h-8"
                     src = {sunsetIcon}
                     />
                <span className="font-semibold text-white text-lg">5:48 PM</span>
                </div>


                 <div className="flex flex-col flex-grow flex-1 items-center justify-center"> {/*UV block */}
                     <img 
                     className="w-8 h-8"
                     src = {airQualityIcon}
                     />
                <span className="font-semibold text-white text-lg">Bom</span>
                </div>
        </div>

      </div>
    </div>
  )
}

export default HorizontalBox
