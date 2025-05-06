import { useNavigate } from "react-router";
import { DefaultLayout } from "../../shared/components/ui/defaultLayout"
import { PageRegister, Register } from "../../shared/components/ui/register/Register"

const registerStructure: PageRegister = {
    titlePage: 'Cadastro de Estabelecimento',
    blocks: [
        {
            title: 'Informações do Estabelecimento',
            fields: [
                {name: 'nome', label: 'Nome do Estabelecimento', type: 'text', required: true},
                {name: 'phone', label: 'Telefone', type: 'text', required: true},
                {name: 'email', label: 'E-mail', type: 'text', required: true},
                {name: 'address', label: 'Endereço', type: 'text', required: true},
            ]
        }
    ],
};

export const RegisterEstablishment = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/estabelecimento');
    }

    return (
        <DefaultLayout>
            <Register structure={registerStructure} onBack={handleBack}/>
        </DefaultLayout>
    )
}