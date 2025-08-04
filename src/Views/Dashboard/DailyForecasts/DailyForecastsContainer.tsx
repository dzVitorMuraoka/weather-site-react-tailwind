import DailyForecastItem from "./DailyForecastItem"
type dailyForecastItem = {
    time: string;
    tempMax:number;
    tempMin: number;
}
type DailyForecastsContainerProps = {
    forecastCondition: string;
    dailyArray?: dailyForecastItem[]
}
const DailyForecastsContainer = ({ forecastCondition, dailyArray }: DailyForecastsContainerProps) => {
    return (
        <div>
            <div className="flex flex-col bg-bg-containers rounded-xl w-4/5 h-min">
                <span className="text-white text-center text-xl font-normal mt-2">Próximos 7 dias</span>
                <div className="flex-1 space-y-3 px-4 py-6">
                    
                    {dailyArray?.map((item, index)=>(

                    <DailyForecastItem
                    forecastCondition={forecastCondition}
                    key ={index}
                    day={item.time}
                    tempMax={item.tempMax}
                    tempMin={item.tempMin}
                    />

                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default DailyForecastsContainer
