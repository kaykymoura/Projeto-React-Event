import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Login from "../pages/login/Login";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Cadastro from "../components/cadastro/Cadastro";
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                {/* http://localhost:3000/   => Login */}
                <Route path="/tipoEvento" element={<Cadastro />} />
                <Route path="/tipoEvento" element={<CadastroTipoEvento />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default Rotas;
