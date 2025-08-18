type HourlyItemProps = {
  icon: string;
  temp: number;
  hour: string;
};
const HourlyItem = ({ icon, hour, temp }: HourlyItemProps) => {
  return (
    <div className="flex flex-col items-center gap-3 custom-md:gap-4  bg-bg-containers h-min w-20 custom-md:w-28 rounded-xl">
      <span className="mt-2 text-white text-xl font-semibold">{hour}</span>

      <img className="w-12 h-12" src={icon} />

      <div className="mb-2 text-white text-xl font-bold">{temp} °C</div>
    </div>
  );
};

export default HourlyItem;
