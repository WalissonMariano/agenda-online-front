import { useNavigate } from "react-router";
import { DefaultLayout } from "../../shared/components/ui/defaultLayout"
import { PageRegister, Register } from "../../shared/components/ui/register/Register"

const registerStructure: PageRegister = {
    titlePage: 'Cadastro de Profissional',
    blocks: [
        {
            title: 'Informações do Profissional',
            fields: [
                {name: 'id_user', label: 'Nome do Profissional', type: 'text', required: true},
                {name: 'id_estabelecimento', label: 'Estabelecimento', type: 'text', required: true},
            ]
        }
    ],
};


export const RegisterProfessional = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/profissionais');
    }

    return(
        <DefaultLayout>
            <Register structure={registerStructure} onBack={handleBack}/>
        </DefaultLayout>
    )
}