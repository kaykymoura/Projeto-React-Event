import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/login/Login"
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";
import CadastrarTipoDeUsuario from "../pages/cadastroTipoUsuario/CadastroTipoUsuario";
import CadastroEvento from "../pages/cadastroEvento/CadastroEvento";
import ListagemEvento from "../pages/listagemEvento/listagemEvento";
const Rotas = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                {/* http://localhost:3000/   => Login */}
                <Route path="/Login" element={<Login />} />
                <Route path="/CadastroTipoEvento" element={<CadastroTipoEvento />} />
                <Route path="/CadastroTipoUsuario" element={<CadastrarTipoDeUsuario />} />
                <Route path="/CadastroEvento" element={<CadastroEvento />} />
                <Route path="/ListaEvento" element={<ListagemEvento />} />

            </Routes>

        </BrowserRouter>
    );
};

export default Rotas;
