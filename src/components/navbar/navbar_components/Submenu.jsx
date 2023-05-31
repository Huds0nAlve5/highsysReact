import { CadastroProduto } from "../../../pages/cadastro/CadastroProduto"
import style from "../../../styles/navbar/navbar.module.css"
import { Link } from "react-router-dom"

export function Submenu({clickEvent, mouLeaveEvent, submenus, rotina}){
    return (
        <ul className={style.submenu} onMouseEnter={clickEvent} onMouseLeave={mouLeaveEvent} id={rotina}>
            {submenus.map(submenu_item => {
                return (<Link to={submenu_item.Rota} key={submenu_item.Subrotina} className={style.link}><li className={style.submenu_item} key={submenu_item.Subrotina}>{submenu_item.Subrotina}</li></Link>)
            })}
        </ul>
    )
}