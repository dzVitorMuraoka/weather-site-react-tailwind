type PrincipalInformationsProps = {
  localName: string;
  countryName: string;
  pop: number;
};
const PrincipalInformations = ({
  localName,
  countryName,
  pop,
}: PrincipalInformationsProps) => {
  return (
    <div className="flex-col justify-center items-center">
      <h1 className="text-white font-bold text-4xl custom-mdp:flex custom-mdp:items-baseline">
        {localName || "Carregando"}
        <span className="hidden text-center text-white text-base font-light custom-mdp:block align-baseline mx-5">
          {countryName}
        </span>
      </h1>
      <div className=" text-center text-white text-base font-light custom-mdp:hidden ">
        {countryName}
      </div>
      <span className="hidden mt-4 text-base font-normal text-white custom-mdp:inline-block">
        Probabilidade de chuva: {pop}%
      </span>
    </div>
  );
};

export default PrincipalInformations;
