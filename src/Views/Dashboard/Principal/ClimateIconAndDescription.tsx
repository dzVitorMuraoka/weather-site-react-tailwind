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
   
    <div  className="flex-col flex items-center ">
     <img className="size-44"
     src={climateCondition}
     /> 
     <span className="text-center text-white font-normal">{toUpperCaseFirstLetter(description)}</span>
   
  </div>
  )

}

export default ClimateIconAndDescription
