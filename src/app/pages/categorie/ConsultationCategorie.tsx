import { useNavigate } from "react-router";
import { DefaultLayout } from "../../shared/components/ui/defaultLayout"
import { Consultation } from "../../shared/components/ui/consultation/Consultation";

interface Categorie {
    id: number;
    name: string;
    description: string;
}

const categorie: Categorie[] = [
    {id: 1, name: "Produto", description: "Descrição teste"},
    {id: 2, name: "Serviço", description: "Descrição teste"},
]

export const Categorie = () => {

    const navigator = useNavigate();

    const handleNewProduct = () => {
        navigator('/cadastroCategoria');
    }

    return (
        <DefaultLayout>
            <Consultation
                title="Categorias cadastradas"
                columns={[
                    {header: "Nome", accessor: "name"},
                    {header: "Descrição", accessor: "description"},
                ]}
                data={categorie}
                onNew={handleNewProduct}
            />
        </DefaultLayout>
    )
}