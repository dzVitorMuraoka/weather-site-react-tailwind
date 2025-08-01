import DailyForecastItem from "./DailyForecastItem"
type DailyForecastsContainerProps = {
    forecastCondition: string;
}
const DailyForecastsContainer = ({ forecastCondition }: DailyForecastsContainerProps) => {
    return (
        <div>
            <div className="flex flex-col bg-bg-containers rounded-xl w-4/5 h-min">
                <span className="text-white text-center text-xl font-normal mt-2">Próximos 7 dias</span>
                <div className="flex-1 px-4 py-6">
                    <DailyForecastItem
                        forecastCondition={forecastCondition}
                    />
                </div>
            </div>
        </div>
    )
}

export default DailyForecastsContainer
