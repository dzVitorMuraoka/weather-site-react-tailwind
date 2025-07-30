type ClimateProps ={
    climateCondition: string;
    description: string;
}

const ClimateIconAndDescription = ({climateCondition, description}:ClimateProps) => {

if(!description) 
 return <span className="text-white font-medium text-2xl">Nenhuma cidade localizada</span>

function toUpperCaseFirstLetter(text:string):string{
    if(text === "") return "";
    


    return text.replace(/^\w/g, l => l.toUpperCase());
}


  return (
    <div className="">
    <div  className="">
     <img className="w-44 h-44"
     src={climateCondition}
     /> 
     <span className="text-base text-white font-normal">{toUpperCaseFirstLetter(description)}</span>
    </div>
  </div>
  )

}

export default ClimateIconAndDescription
