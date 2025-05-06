import Banner from "../../assents/Login.png";
import "./Login.css";
import Botao from "../../components/botao/Botao";
import Logo from "../../assents/img/logo.png";

const Login = () => {
    return (
        <main className="main_login">
            <div className="banner_login">
                <img src={Banner} alt="" />

            </div>
            <section className="section_login">

                <div className="logo_login">
                    <img src={Logo} alt="Logo do event+" />
                </div>

                <form action="" className="form_login">

                    <div className="campos_login">

                        <div className="campo_input">
                            <input type="nome" name="nome" placeholder="Username" />
                        </div>

                        <div className="campo_input">
                            <input type="nome" name="nome" placeholder="Password" />
                        </div>
                    </div>

                    <div className="esqueceu_Senha">
                    <a href="">Esqueceu a senha?</a>
                    </div>
                    <Botao nomeDoBotao="Login" />
                </form>

            </section>
        </main>
    );
};

export default Login;
