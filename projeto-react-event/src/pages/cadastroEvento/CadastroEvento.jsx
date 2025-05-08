import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../assents/img/BannerCadastro.png"

const CadastrarTipoDeUsuario = () => {
    return (
        <>
            <Header />
            <Cadastro
                titulo="Cadastro de evento"
                visibilidade="none"
                Imagem={Banner}
            />
            <Lista 
            titulo="Lista de Eventos"
            tdnome="Nome Evento"
            />
            <Footer />
            
        </>
    )
}

export default CadastrarTipoDeUsuario;