import { useNavigate } from "react-router";
import { Consultation } from "../../shared/components/ui/consultation/Consultation"
import { DefaultLayout } from "../../shared/components/ui/defaultLayout"

interface Product {
    id: number;
    name: string;
    time: string;
    price: number;
    categorie: string;
}

const product: Product[] = [
    {id: 1, name: "Corte", time: "2 hours 30 minutes", price: 10.5, categorie: "teste"},
    {id: 1, name: "Corte", time: "2 hours 30 minutes", price: 10.5, categorie: "teste"},
]

export const Product = () => {

    const navigator = useNavigate();

    const handleNewProduct = () => {
        navigator('/cadastroProdutos');
    }

    return (
        <DefaultLayout>
            <Consultation<Product>
                title="Produtos cadastrados"
                columns={[
                    {header: "Nome", accessor: "name"},
                    {header: "Tempo", accessor: "time"},
                    {header: "Preço", accessor: "price"},
                    {header: "Categoria", accessor: "categorie"},
                ]}
                data={product}
                onNew={handleNewProduct}
                />
        </DefaultLayout>
    )
}