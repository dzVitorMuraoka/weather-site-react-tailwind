type CurrentTemperature ={
    temperature: number;
}
const CurrentTemperature = ({temperature}:CurrentTemperature) => {
    let temp = Math.trunc(temperature);
    if(temp === undefined ){
        <p>...</p>
    } 

  return (
    <div className="text-white font-bold text-5xl">
        {temp} °C
    </div>
  )
}

export default CurrentTemperature
