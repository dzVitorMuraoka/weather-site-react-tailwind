type CurrentTemperature ={
    data: any;
}
const CurrentTemperature = ({data}:CurrentTemperature) => {
    let temp = Math.trunc(data?.main?.temp);
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
