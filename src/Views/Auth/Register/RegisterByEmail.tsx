import { auth } from "../../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"


const RegisterByEmail = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSingUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const createUser = await createUserWithEmailAndPassword(auth, email, password);
            alert("Usuário registrado");
            console.log(createUser);
        } catch (error) {
            console.error("Erro: " + error);

        }
    }

    return (

        <form onSubmit={handleSingUp}>
            <input type="email" placeholder="email@exemplo.com" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="senha" value={password} onChange={e => {
                setPassword(e.target.value)
            }} />

            <button type="submit">Criar conta</button>
        </form>

    )
}

export default RegisterByEmail
