import { useState } from "react";
import {LinkButton} from "../../shared/components/ui/linkButton";
import { useNavigate } from "react-router";

interface User {
    name: string;
    email: string;
    cpf: string;
    typeUser: number;
    phone: string;
    password: string;
}

export const CadastroUsuario = () => {

    const [user, setUser] = useState<User>({ name: "", email: "", cpf:"", typeUser: 0, phone:"", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setUser({ ...user, [e.target.name]: e.target.value, [name]: name === "typeUser" ? Number(value) : value});
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        console.log(user);
        try {
          const response = await fetch("http://localhost:3000/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });
    
          if (!response.ok) {
            throw new Error("Erro ao cadastrar usuário");
          }
    
          alert("Usuário cadastrado com sucesso!");

          setUser({ name: "", email: "", cpf:"", typeUser: 0, phone:"", password: "" });

          navigate("/");

        } catch (err) {
          setError(err instanceof Error ? err.message : "Erro desconhecido");
        } finally {
          setLoading(false);
        }
      };

    return (
        <div className="bg-gradient-to-br pt-20 from-yellow-100 to-orange-50 h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-4 border rounded shadow-md max-w-md mx-auto">
                <h2 className="text-xl font-bold mb-4">Cadastro de Usuário</h2>
                {error && <p className="text-red-500">{error}</p>}

                <div className="mb-2">
                    <label className="block text-sm font-medium">Nome</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-2">
                    <label className="block text-sm font-medium">E-mail</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-2">
                    <label className="block text-sm font-medium">CPF</label>
                    <input type="text" name="cpf" value={user.cpf} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-2">
                    <label className="block text-sm font-medium">Tipo Usuario</label>
                    <input type="number" name="typeUser" value={user.typeUser} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-2">
                    <label className="block text-sm font-medium">Telefone</label>
                    <input type="text" name="phone" value={user.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-2">
                    <label className="block text-sm font-medium">Senha</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                
                <button type="submit" disabled={loading} className="bg-blue-500 text-white p-2 rounded w-full">
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
                <div className="mt-2 text-center">
                    <LinkButton to="/" text="Desistir" />
                </div>
            </form>
        </div>
    );
};


