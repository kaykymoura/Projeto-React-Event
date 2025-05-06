import "./Header.css";
import Logo from "../../assents/img/logo.png";
import Voltar from "../../assents/img/Vector.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="layout_grid cabecalho">
                {/* Ao clicar no link, redireciona para a tela login */}
                <Link to="/">
                    <img src={Logo} alt="Logo do Event+" />
                </Link>
                <nav className="nav_header">
                    <Link className="link_header" to="/Home">Home</Link>
                    <Link className="link_header" to="/Eventos">Eventos</Link>
                    <Link className="link_header" to="/Usuários">Usuários</Link>
                    <Link className="link_header" to="/Contatos">Contatos</Link>

                </nav>
                <div className="admin">
                    <Link className="link_header" to="/Administrador">Administrador</Link>
                    <Link className="link_header" to="/Voltar"><img src={Voltar} alt="Botao para voltar" /></Link>
                </div>
            </div>
        </header>
    )
}

export default Header;