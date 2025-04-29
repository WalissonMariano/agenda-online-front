import { Consultation } from "../../shared/components/ui/consultation"
import { DefaultLayout } from "../../shared/components/ui/defaultLayout"

interface Product {
    id: number;
    nome: string;
}

const product: Product[] = [
    {id: 1, nome: "Corte"},
    {id: 2, nome: "Sombracelhas"},
]

export const Product = () => {

    const handleNewProduct = () => {
        console.log('teste');
    }

    return (
        <DefaultLayout>
            <Consultation<Product>
                title="Produtos cadastrados"
                columns={[
                    {header: "ID", accessor: "id"},
                    {header: "Nome", accessor: "nome"},
                ]}
                data={product}
                onNew={handleNewProduct}
                />
        </DefaultLayout>
    )
}