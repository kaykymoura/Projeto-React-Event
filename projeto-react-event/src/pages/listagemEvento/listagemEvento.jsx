import "./listagemEvento.css"
import Seletor from "../../assents/Selecao.png"
import Comentar from "../../assents/img/Comentario.png"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import Toggle from "../../components/Toggle/Toggle";


const Lista = () => {

    return (
        <>
            <Header />
            <section className="lista_eventos">
                <h1>Eventos</h1>
                <hr />
                <div className="tabelas">
                <select name="Tipo De Evento" id="" className="select_eventos">
                    <option value="" disabled selected>Todos os eventos</option>
                    <option value="">opcao 1</option>
                    <option value="">opcao 2</option>
                    <option value="">opcao 3</option>
                </select>
                    <thead>
                        <tr className="table_cabecalhos">
                            <th>Titulo</th>
                            <th>Tipo Evento</th>
                            <th>Comentarios</th>
                            <th>Participar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="itens_lista">
                            <td data-cell="Nome" >Nome Evento</td>
                            <td data-cell="Nome" >Tipo Evento</td>
                            <td data-cell="Comentar"><img src={Comentar} alt="Comentarios" /></td>
                            <td data-cell="Participar"><Toggle/></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="itens_lista">
                            <td>Nome Evento</td>
                            <td data-cell="Nome" >Tipo Evento</td>
                            <td data-cell="Comentar"><img src={Comentar} alt="Comentarios" /></td>
                            <td data-cell="Participar"><Toggle/></td>
                        </tr>

                    </tbody>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Lista;