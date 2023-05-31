import style from "../../../styles/navbar/navbar.module.css"
import { Submenu } from "./Submenu"

export function Menu({rotina, submenus}){
    function clickHandler(){
        const hideSubTit = document.getElementById(rotina)
        hideSubTit.style.display != "flex" ? hideSubTit.style.display = "flex" : hideSubTit.style.display = "none"
    }

    function mouseLeaveHandler(){
        const hideSubTit = document.getElementById(rotina)
        hideSubTit.style.display = "none"
    }

    return (
        <>
            <div className={style.coluna_menu_submenu}>
            <li className={style.menu_item} onClick={clickHandler} onMouseLeave={mouseLeaveHandler}>{rotina}</li>
                <Submenu clickEvent={clickHandler} mouLeaveEvent={mouseLeaveHandler} submenus={submenus} rotina={rotina}/>
            </div>
        </>
    )
}