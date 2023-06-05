import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

export function Listagem({listagem, style}){
    return(
        <table className={style.listagem}>
            <thead>
                <tr>
                    <th className={style.coluna_cod}>Código</th>
                    <th className={style.coluna_des}>Descrição</th>
                    <th className={style.coluna_acao}></th>
                    <th className={style.coluna_acao}></th>
                </tr>
            </thead>

            <tbody>
                {listagem.map((item_list, index) => {
                    return(
                            <tr key={index}>
                                <td key={Object.values(item_list)[0]} className={style.coluna_cod}>{Object.values(item_list)[0]}</td>
                                <td key={Object.values(item_list)[1]} className={style.coluna_des}>{Object.values(item_list)[1]}</td>
                                <td className={style.coluna_acao}><BsFillPencilFill style={{height:"20px"}}/></td>
                                <td className={style.coluna_acao}><AiFillDelete style={{height:"20px"}}/></td>
                            </tr>
                    )
                })}
            </tbody>
        </table>
    )
}