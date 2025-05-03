import { DefaultLayout } from "../../shared/components/ui/defaultLayout"
import { Block, Register } from "../../shared/components/ui/register/Register"

const registerStructure: Block[] = [
    {
        title: 'Informações do Produto',
        fields: [
            {name: 'nome', label: 'Nome do Produto', type: 'text', required: true},
            {name: 'descricao', label: 'Descrição', type: 'text', required: true},
            {name: 'preço', label: 'Preço', type: 'number', required: true},
        ]
    },
    {
        title: 'Estoque',
        fields: [
            {name: 'quantidade', label: 'Quantidade em Estoque', type: 'number', required: true},
        ]
    }
];

export const RegisterProduct = () => {
    return(
        <DefaultLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Cadastro de Produto</h1>
                <Register structure={registerStructure}/>
            </div>
        </DefaultLayout>
    )
}