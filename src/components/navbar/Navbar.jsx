import styles from "../../styles/navbar/navbar.module.css"
import { BackgroundMiniLogo } from "../img/BackgroundMiniLogo"
import { Menu } from "./navbar_components/Menu"

export function Navbar(){
    return (
        <nav id={styles.navbar}>
            <BackgroundMiniLogo />
            <ul id={styles.menu}>
                <Menu rotina="Cadastro"/>
                <Menu rotina="Caixa"/>
                <Menu rotina="Notas fiscais"/>
            </ul>
        </nav>
    )
}