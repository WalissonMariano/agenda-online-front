import { BrowserRouter, Route, Routes } from "react-router"
import { Login } from "../pages/login/Login"
import { CadastroUsuario } from "../pages/registerUser"
import { Home } from "../pages/home/Home"
import { Product } from "../pages/product/ConsultationProduct"
import { Categorie } from "../pages/categorie/ConsultationCategorie"
import { Establishment } from "../pages/establishment/ConsultationEstablishment"
import { Professional } from "../pages/professional/ConsultationProfessional"
import { Schedule } from "../pages/schedule/Schedule"
import { RegisterProduct } from "../pages/product/RegisterProduct"
import { RegisterCategorie } from "../pages/categorie/RegisterCategorie"
import { RegisterProfessional } from "../pages/professional/RegisterProfessional"
import { RegisterEstablishment } from "../pages/establishment/RegisterEstablishment"

export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/registro" element={<CadastroUsuario/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/agenda" element={<Schedule/>} />
                <Route path="/estabelecimento" element={<Establishment/>} />
                <Route path="/cadastroEstabelecimento" element={<RegisterEstablishment/>} />
                <Route path="/profissionais" element={<Professional/>} />
                <Route path="/cadastroProfissional" element={<RegisterProfessional/>} />
                <Route path="/produtos" element={<Product/>} />
                <Route path="/cadastroProdutos" element={<RegisterProduct/>} />
                <Route path="/categoria" element={<Categorie/>} />
                <Route path="/cadastroCategoria" element={<RegisterCategorie/>} />  
            </Routes>
        </BrowserRouter>
    )
}