import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

export function ListagemProduto({listagem_produto, style}){
    return(
        <table className={style.listagem_produto}>
            <thead>
                <tr>
                    <th className={style.coluna_cod}>Código</th>
                    <th className={style.coluna_des}>Descrição</th>
                    <th className={style.coluna_acao}></th>
                    <th className={style.coluna_acao}></th>
                </tr>
            </thead>

            <tbody>
                {listagem_produto.map((produto, index) => {
                    return(
                            <tr key={index}>
                                <td key={produto.procod} className={style.coluna_cod}>{produto.procod}</td>
                                <td key={produto.prodes} className={style.coluna_des}>{produto.prodes}</td>
                                <td className={style.coluna_acao}><BsFillPencilFill style={{height:"20px"}}/></td>
                                <td className={style.coluna_acao}><AiFillDelete style={{height:"20px"}}/></td>
                            </tr>
                    )
                })}
            </tbody>
        </table>
    )
}