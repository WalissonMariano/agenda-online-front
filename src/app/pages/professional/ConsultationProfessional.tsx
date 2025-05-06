import { useNavigate } from "react-router";
import { DefaultLayout } from "../../shared/components/ui/defaultLayout"
import { Consultation } from "../../shared/components/ui/consultation/Consultation";

interface Professional {
    id: number;
    user_id: number;
    establishment_id: number;
}

const professional: Professional[] = [
    {id: 1, user_id: 1, establishment_id: 1},
    {id: 2, user_id: 2, establishment_id: 2},
]  

export const Professional = () => {

    const navigator = useNavigate();

    const handleNewProduct = () => {
        navigator('/cadastroProfissional');
    }

    return (
        <DefaultLayout>
            <Consultation<Professional>
                title="Profissionais cadastrados"
                columns={[
                    {header: "Nome", accessor: "user_id"},
                    {header: "Estabelecimento", accessor: "establishment_id"},
                ]}
                data={professional}
                onNew={handleNewProduct}
                />
        </DefaultLayout>
    )
}