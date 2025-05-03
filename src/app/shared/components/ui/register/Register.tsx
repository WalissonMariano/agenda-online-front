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

export interface PageRegister {
    titlePage: string;
    blocks: Block[];
}

export interface Props {
    structure: PageRegister;
    onBack: ()=> void;
}


export const Register: React.FC<Props> = ({structure, onBack}) => {
//console.log({structure});

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
        <div className="p-6 bg-white rounded-xl shadow-md space-y-6 w-full">
            <h1 className="text-2xl font-bold text-gray-600">{structure.titlePage}</h1>
            <form onSubmit={handleSubmit} >
                {structure.blocks.map((block, idx) => (
                    <fieldset key={idx} className="pt-4 mt-5">
                        <legend className="text-xl font-semibold  bg-amber-400 text-gray-600 mt-6 mb-2 p-1 w-full">
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
                <div className="text-center">
                    <button 
                        onClick={onBack}
                        className="w-1/3 mt-3 mr-3 bg-red-400 hover:bg-red-200 text-gray-600 font-semibold py-2 px-4 rounded-lg transition"    
                    >
                        Voltar
                    </button>
                    <button 
                        type="submit"
                        className="w-1/3 mt-3 bg-amber-400 hover:bg-amber-300 text-gray-600 font-semibold py-2 px-4 rounded-lg transition"    
                    >
                        Salvar
                    </button>
                </div>
                
                
                {message && (
                    <p className="text-center text-sm mt-4 text-green-600">
                        {message}
                    </p>
                )}

            </form>
        </div>
    )
}