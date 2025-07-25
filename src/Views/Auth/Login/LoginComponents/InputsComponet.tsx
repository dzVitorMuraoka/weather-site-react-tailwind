import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const InputsComponet = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const logging = await signInWithEmailAndPassword(auth, email, password);
            alert("Logado com sucesso!")
            navigate("/dashboard");
            console.log(logging)
        } catch (error) {
            console.log("Erro: " + error);
        }
    }
  
    return (
        <div>
            <form className="mt-5"
                onSubmit={handleLogin}>
                <div>
                    <label className="block text-[14px] font-semibold text-white mb-[10px]">E-mail</label>
                    <div className="flex items-center">
                        <input
                            onChange={e => {
                                setEmail(e.target.value)
                            }}
                            type="email"
                            placeholder="email@exemplo.com"
                            value={email}
                            className="block w-full rounded-lg px-5 py-2 focus:outline-none border  hover:border-blue-500 focus:border-blue-700"
                            required />


                    </div>

                    <div className="mt-[15px]">
                        <label className="block text-[14px] font-semibold text-white mb-[10px]">Senha</label>
                        <div >
                            <input
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                value={password}
                                type="password"
                                placeholder="● ● ● ● ● ● "
                                className="block w-full border rounded-lg px-5 py-2 focus:outline-none  hover:border-blue-400 focus:border-blue-700"
                                required />

                        </div>
                        <button
                            type="submit"
                            className=" mt-[30px] bg-buttonSubmit text-white w-full py-2 rounded-lg font-bold">Entrar</button>

                    </div>
                </div>

            </form>
        </div>
    )
}

export default InputsComponet
