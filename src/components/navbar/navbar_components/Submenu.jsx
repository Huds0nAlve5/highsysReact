import style from "../../../styles/navbar/navbar.module.css"

export function Submenu({clickEvent, mouLeaveEvent, submenus, rotina}){
    return (
        <ul className={style.submenu} onMouseEnter={clickEvent} onMouseLeave={mouLeaveEvent} id={rotina}>
            {submenus.map(submenu_item => {
                return (<li className={style.submenu_item} key={submenu_item}>{submenu_item}</li>)
            })}
        </ul>
    )
}