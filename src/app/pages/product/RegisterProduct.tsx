import { useNavigate } from "react-router";
import { DefaultLayout } from "../../shared/components/ui/defaultLayout"
import { PageRegister, Register } from "../../shared/components/ui/register/Register"

const registerStructure: PageRegister = {
    titlePage: 'Cadastro de Produto',
    blocks: [
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
    ],
};

export const RegisterProduct = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/produtos');
    }
    
    return(
        <DefaultLayout>
            <Register structure={registerStructure} onBack={handleBack}/>
        </DefaultLayout>
    )
}