import "./Lista.css"
import Editar from "../../assents/img/Lapis.png"
import Excluir from "../../assents/img/Lixeira.png"


const Lista = (props) => {
    return(
        <section className="listagem">
            <h1>{props.tituloLista}</h1>
            <hr />

            <div className="tabela">
                <thead>
                    <tr className="table_cabecalho">
                        <th>Titulo</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="item_lista">
                        <td data-cell="Nome" >Tipo Evento</td>
                        <td data-cell="Editar"><img src={Editar} alt="Imagem de uma caneta" /></td>
                        <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                    </tr>
                </tbody>
            </div>
        </section>
    )
}

export default Lista;
