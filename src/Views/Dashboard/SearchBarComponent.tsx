import { useState, } from "react";

type SearchBarProps = {
    searchIcon: string;
    onSearch: (cityInput:string) => void;

}
const SearchBarComponent = ({ searchIcon, onSearch }: SearchBarProps) => {
    const [input, setInput] = useState("")
    const handleInput = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        onSearch(input.trim());
    }

    return (
        <form
            className="relative flex justify-center w-full max-w-[1190px] rounded-lg mt-4 shadow-md"
        >

            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img
                    src={searchIcon}
                    className="w-6 h-6"
                />
            </div>
            <input
                type="search"
                placeholder={ "Cidades"}
                value={input}
                className="bg-bg-containers h-min w-full rounded-2xl focus:outline-none pl-12 p-3 text-white"
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleInput(e)}
            />

        </form>

    )
}

export default SearchBarComponent
