type DailyForecastItemProps = {
    forecastCondition: string;
}
const DailyForecastItem = ({ forecastCondition }: DailyForecastItemProps) => {
    return (
        <div>
            <div className="bg-daily-forecast-item/10 w-full h-min rounded-lg">
                <div className="flex items-center justify-center gap-6 py-1">
                    <span className="text-white text-xl font-medium mr-6">Hoje</span>

                    <img className="w-16 h-16"
                        src={forecastCondition}
                    />
                    <div>
                        <span className="text-white text-xl font-semibold">24</span>
                        <span className="text-white text-xl">/</span>
                        <span className="text-white text-xl text-normal">18</span>
                    </div>



                </div>


            </div>
        </div>
    )
}

export default DailyForecastItem
