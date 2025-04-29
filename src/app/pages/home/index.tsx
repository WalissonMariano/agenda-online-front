import { Menu } from "../../shared/components/ui/menu";

export const Home = () => {

    const token = localStorage.getItem('token');

    console.log(token);

    return(
        <div className="flex min-h-screen">
            <div className="w-64 bg-gradient-to-br from-yellow-100 to-orange-50 p-4">
                <Menu />
            </div>
            <div className="flex-1 p-8">
                <div>
                Seu conteúdo aqui
                </div>
            </div>
        </div>
    )
}