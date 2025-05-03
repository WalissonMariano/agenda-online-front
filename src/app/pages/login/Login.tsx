import { useState } from "react"
import { LinkButton } from "../../shared/components/ui/linkButton";
import { useNavigate } from "react-router";

interface Login {
    email: string;
    password: string;
}

export const Login = () => {

    const [login, setLogin] = useState<Login>({email:"", password:""});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setLogin({...login, [name]: value});
    }

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
   
        try {
            const response = await fetch("http://localhost:3000/auth", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(login),
            });
           
            if (!response.ok) {
                throw new Error("Erro ao fazer login.");
            }

            const data = await response.json();

            localStorage.setItem('token', data.accessToken);

            navigate("/home");

        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro desconhecido.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="text-gray-600 bg-gradient-to-br from-yellow-100 to-orange-50 justify-start pt-20 h-screen">
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md max-w-md mx-auto bg-white" action="">
                <div className="w-full flex justify-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s" alt="" className="w-35" />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mb-2">
                    <label className="block text-sm font-medium">E-mail:</label> 
                    <input className="w-full p-2 border rounded" name="email" type="text" value={login.email} onChange={handleChange} placeholder="Digite seu nome"/>
                </div>
                <div className="mb-2">
                    <label >Senha:</label>
                    <input className="w-full p-2 border rounded" name="password" type="password" value={login.password} onChange={handleChange} placeholder="Digite sua senha"/>
                </div>
                <button type="submit" disabled={loading} className="mb-2 bg-amber-400 hover:bg-amber-300 text-gray-600 font-bold p-2 rounded w-full">
                    {loading ? "Entrando..." : "Entrar"}
                </button>
                <div className="mb-2 text-center">
                    <LinkButton to="/registro" text="Crie uma conta" />
                </div>
            </form>
        </div>   
    )
} 