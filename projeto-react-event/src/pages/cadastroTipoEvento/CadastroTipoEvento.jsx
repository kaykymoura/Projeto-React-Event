
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../assents/img/BannerTipoEvento.png";

const CadastrarTipoEvento = () => {
    return (
        <>
            <Header />
            <Cadastro
                titulo="Cadastro Tipo de Eventos"
                visibilidade = "none"
                Imagem={Banner}
                
            />
            <Lista 
            titulo="Lista Tipo de Eventos"
            tdnome="Tipo Evento"
            />
            <Footer />
            
        </>
    )
}

export default CadastrarTipoEvento;