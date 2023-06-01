import styles from "../../styles/navbar/navbar.module.css"
import { BackgroundMiniLogo } from "../img/BackgroundMiniLogo"
import { Menu } from "./navbar_components/Menu"
import {submenu_cadastro, submenu_fiscal, submenu_financeiro, submenu_relatorios} from "../../routes/routes_subrotina"
import { BarraVertical } from "./navbar_components/BarraVertical"
import { Logout } from "./navbar_components/Logout"

export function Navbar(){
    
    return (
        <nav id={styles.navbar}>
            <BackgroundMiniLogo />
            <BarraVertical />
            <div className={styles.space_between}>
                <ul id={styles.menu}>
                    <Menu rotina="Cadastro" submenus={submenu_cadastro}/>
                    <Menu rotina="Fiscal" submenus={submenu_fiscal}/>
                    <Menu rotina="Financeiro" submenus={submenu_financeiro}/>
                    <Menu rotina="Relatórios" submenus={submenu_relatorios}/>
                </ul>
                <Logout />
            </div>
        </nav>
    )
}