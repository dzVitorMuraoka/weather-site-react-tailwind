


type PrincipalInformationsProps = {
    data: any;
}
const PrincipalInformations = ({ data }: PrincipalInformationsProps) => {
    return (
        <div className="">
            <h1 className="flex items-baseline text-white font-bold text-4xl">
                {data.name}
                <span className="mx-5 text-white text-base font-light align-baseline"> Brasil </span>
            </h1>
            <span className="inline-block mt-4 text-base font-normal text-white">Chance de chuva: 10%</span>
        </div>


    )
}

export default PrincipalInformations
