type DailyForecastItemProps = {
    forecastCondition: string;
    tempMax: number;
    tempMin: number;
    day:string;
}
const DailyForecastItem = ({ forecastCondition, tempMax, tempMin, day }: DailyForecastItemProps) => {
    return (
        <div>
            <div className="bg-daily-forecast-item/10 w-full h-min rounded-lg">
                <div className="flex items-center justify-center gap-6 py-1">
                    <span className="text-white text-xl font-medium mr-6">{day}</span>

                    <img className="w-16 h-16"
                        src={forecastCondition}
                    />
                    <div>
                        <span className="text-white text-xl font-semibold">{tempMax}</span>
                        <span className="text-white text-xl">/</span>
                        <span className="text-white text-xl text-normal">{tempMin}</span>
                    </div>



                </div>


            </div>
        </div>
    )
}

export default DailyForecastItem
