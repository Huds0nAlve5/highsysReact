import { Link } from "react-router-dom"
import style from "../../styles/img/minilogo.module.css"

export function BackgroundMiniLogo(){
    return(
        <Link to={"/home"}><div className={style.mini_logo}></div></Link>
    )
}