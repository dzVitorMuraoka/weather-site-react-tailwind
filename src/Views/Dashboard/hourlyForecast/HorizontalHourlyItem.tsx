type HourlyItemProps = {
    sun: string;
    temp: number;
    hour: string;

}
const HourlyItem = ({ sun, hour, temp }: HourlyItemProps) => {

    return (
        <div>

            <div
                className="flex flex-col items-center gap-4 bg-bg-containers h-min w-28 rounded-xl">

                <span className="mt-2 text-white text-xl font-semibold">{hour}</span>

                <img className="w-12 h-12"
                    src={sun}/>

                <div className="mb-2 text-white text-xl font-bold">{temp} °C
                </div>

            </div>

        </div>
    )
}

export default HourlyItem
