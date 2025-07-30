


type PrincipalInformationsProps = {
    localName: string;
    countryName: string;
    pop: number;
}
const PrincipalInformations = ({ localName, countryName, pop }: PrincipalInformationsProps) => {
    return (
        <div className="">
            <h1 className="flex items-baseline text-white font-bold text-4xl">
                {localName || "Carregando"}
                <span className="mx-5 text-white text-base font-light align-baseline">{countryName}</span>
            </h1>
            <span className="inline-block mt-4 text-base font-normal text-white">Probabilidade de chuva: {pop}%</span>
        </div>


    )
}

export default PrincipalInformations
