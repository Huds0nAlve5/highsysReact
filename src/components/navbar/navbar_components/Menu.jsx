import style from "../../../styles/navbar/navbar.module.css"

export function Menu({rotina}){
    function clickHandler(){
        const hideSubTit = document.getElementById(rotina)
        hideSubTit.style.display = "flex"
    }

    function mouseLeaveHandler(){
        const hideSubTit = document.getElementById(rotina)
        hideSubTit.style.display = "none"
    }
    return (
        <>
            <div className={style.coluna_menu_submenu}>
            <li className={style.menu_item} onClick={clickHandler} onMouseLeave={mouseLeaveHandler}>{rotina}</li>
                <ul className={style.submenu} onMouseEnter={clickHandler} onMouseLeave={mouseLeaveHandler} id={rotina}>
                    <li className={style.submenu_item}>Produto</li>
                    <li className={style.submenu_item}>Seção</li>
                    <li className={style.submenu_item}>Usuário</li>
                </ul>
            </div>
        </>
    )
}