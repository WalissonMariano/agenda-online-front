import { useState } from "react";

export type FildType = 'text' | 'email' | 'password' | 'number';

export interface Field {
    name: string;
    label: string;
    type: FildType;
    required?: boolean;
}

export interface Block {
    title: string;
    fields: Field[];
}

export interface Props {
    structure: Block[];
}


export const Register: React.FC<Props> = ({structure}) => {
    const [registerData, setRegisterData] = useState<{[key: string]: string}>({});
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setRegisterData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        //EXEMPLO
        if(registerData['senha'] !== registerData['confirmacaoSenha']) {
            setMessage('As senhas não coicidem');
            return;
        }

        console.log('Dados enviados: ', registerData);
        setMessage('Cadastro realizado com sucesso!')

    }

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
            {structure.map((block, idx) => (
                <fieldset key={idx} className="border-t pt-4">
                    <legend className="text-xl font-semibold text-gray-700 mb-2">
                        {block.title}
                    </legend>
                    <div className="grid grid-cols-1 gap-4">
                        {block.fields.map(field => (
                            <div key={field.name}>
                                <label className="block text-gray-600 font-medium mb-1">
                                    {field.label}
                                </label>
                                <input 
                                    type={field.type}
                                    name={field.name}
                                    required={field.required}
                                    value={registerData[field.name] || ''}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        ))}
                    </div>
                </fieldset>
            ))}

            <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"    
            >
                Incluir
            </button>
            
            {message && (
                <p className="text-center text-sm mt-4 text-green-600">
                    {message}
                </p>
            )}

        </form>
    )
}