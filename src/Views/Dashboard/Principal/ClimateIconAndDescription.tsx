type ClimateProps ={
    weatherIcon: string;
    description: string;
}

const ClimateIconAndDescription = ({weatherIcon, description}:ClimateProps) => {

  

function toUpperCaseFirstLetter(text:string):string{
    if(text === "") return "";
    


    return text.replace(/^\w/g, l => l.toUpperCase());
}


  return (
   
    <div  className="flex-col flex items-center justify-center custom-mdp:gap-2">
     <img className="size-36"
     src={weatherIcon}
     /> 
     <span className="text-center text-white font-normal">{toUpperCaseFirstLetter(description)}</span>
   
  </div>
  )

}

export default ClimateIconAndDescription
