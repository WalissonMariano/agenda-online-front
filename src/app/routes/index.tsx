import { BrowserRouter, Route, Routes } from "react-router"
import { Login } from "../pages/login"
import { CadastroUsuario } from "../pages/registerUser"
import { Home } from "../pages/home"
import { Product } from "../pages/product/ConsultationProduct"
import { Categorie } from "../pages/categorie"
import { Establishment } from "../pages/establishment"
import { Professional } from "../pages/professional"
import { Schedule } from "../pages/schedule"
import { RegisterProduct } from "../pages/product/RegisterProduct"

export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/registro" element={<CadastroUsuario/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/agenda" element={<Schedule/>} />
                <Route path="/estabelecimento" element={<Establishment/>} />
                <Route path="/profissionais" element={<Professional/>} />
                <Route path="/produtos" element={<Product/>} />
                <Route path="/cadastroProdutos" element={<RegisterProduct/>} />
                <Route path="/categoria" element={<Categorie/>} />
            </Routes>
        </BrowserRouter>
    )
}