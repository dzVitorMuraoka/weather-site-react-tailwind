import { auth, googleProvider } from "../../../../../firebaseConfig";
import {  signInWithPopup } from "firebase/auth";
type GoogleLoginProps = {
    googleicone: string;
}

const GoogleLoginComponent = ({ googleicone }: GoogleLoginProps) => {
    const handleLoginGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert("Login realizado pelo Google com sucesso!");
        } catch (error) {
            alert("Erro ao realizar o login pelo Google: " + error);
        }
    }
    return (
        <div>
            <button
                onClick={handleLoginGoogle}
                type="submit"
                className="bg-white flex items-center justify-center w-full py-2 mt-[30px] font-medium rounded-lg mb-20">
                <img src={googleicone}
                    className="w-6 h-6 mr-3"></img>

                Entrar com o Google
            </button>
        </div>
    )
}

export default GoogleLoginComponent
