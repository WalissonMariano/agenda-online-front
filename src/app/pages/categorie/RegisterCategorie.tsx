import { useNavigate } from "react-router"
import { DefaultLayout } from "../../shared/components/ui/defaultLayout"
import { PageRegister, Register } from "../../shared/components/ui/register/Register"

const registerStructure: PageRegister = {
    titlePage: 'Cadastro de Categoria',
    blocks: [
        {
            title: 'Informações da Categoria',
            fields: [
                {name: 'nome', label: 'Nome do Produto', type: 'text', required: true},
                {name: 'descricao', label: 'Descrição', type: 'text', required: true},
            ]
        },
    ],
};

export const RegisterCategorie = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/categoria')
    }

    return(
        <DefaultLayout>
            <Register 
                structure={registerStructure}
                onBack={handleBack}
            />
        </DefaultLayout>
    )
}