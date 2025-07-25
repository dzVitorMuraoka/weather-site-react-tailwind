type ClimateProps ={
    climateCondition: string;
}

const ClimateIconAndDescription = ({climateCondition}:ClimateProps) => {
  return (
    <div className="">
    <div  className="">
     <img className="w-44 h-44"
     src={climateCondition}
     /> 
     <span className="text-base text-white font-normal">Ensolarado</span>
    </div>
  </div>
  )

}

export default ClimateIconAndDescription
