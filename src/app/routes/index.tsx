import { BrowserRouter, Route, Routes } from "react-router"
import { Login } from "../pages/login"
import { CadastroUsuario } from "../pages/cadastroUsuario"
import { Home } from "../pages/home"
import { Product } from "../pages/product"

export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/registro" element={<CadastroUsuario/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/product" element={<Product/>} />
            </Routes>
        </BrowserRouter>
    )
}