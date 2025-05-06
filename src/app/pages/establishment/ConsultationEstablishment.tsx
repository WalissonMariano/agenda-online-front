import { useNavigate } from "react-router";
import { Consultation } from "../../shared/components/ui/consultation/Consultation"
import { DefaultLayout } from "../../shared/components/ui/defaultLayout"

interface Establishment {
    id: number;
    name: string;
    phone: string;
    email: string;
}

const establishment: Establishment[] = [
    {id: 1, name: 'Barbearia Top', phone: '(31) 99999999', email: 'teste@gmail.com'}
]

export const Establishment = () => {

    const navigator = useNavigate();

    const handleNewProduct = () => {
        navigator('/cadastroEstabelecimento');
    }

    return (
        <DefaultLayout>
            <Consultation<Establishment>
                title="Cadastro do estabelecimento"
                columns={[
                    {header: "Nome", accessor: "name"},
                    {header: "E-mail", accessor: "email"},
                ]}
                data={establishment}
                onNew={handleNewProduct}
                />
        </DefaultLayout>
    )
}