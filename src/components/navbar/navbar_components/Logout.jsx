import style from "../../../styles/navbar/navbar.module.css"
import { Link } from "react-router-dom"
import { FiLogOut } from "react-icons/fi";

export function Logout(){
    return(
        <>
            <Link to="/login" className={style.link}>
                <div id={style.logout}>
                    Logout <FiLogOut/>
                </div>
            </Link>
        </>
    )
}