import "./Login.css"
import Logo from "../../assents/img/logo.png";
import Logo_banner from "../../assents/Login.png";
import Botao from "../../components/botao/Botao";

const Login = () => {
    return (
        <main className="main_login">
            <div className="logo_banner">
                <img src={Logo_banner} alt="" />
            </div>
            <section className="section_login">
                <img src={Logo} alt="" />
                <form action="" className="form_login">
                    <div className="campos_login">
                        <div className="campo_input">
                            <input type="text" name="Usuario" placeholder="Username" />
                        </div>
                        <div className="campo_input">
                            <input type="password" name="senha" placeholder="Password" />
                        </div>
                    </div>
                        <a href="">Esqueceu sua senha?</a>
                    <Botao nomeDoBotao="Login" />
                </form>
            </section>
        </main>
    )
}

export default Login;