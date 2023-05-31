import styles from "../../styles/navbar/navbar.module.css"
import { BackgroundMiniLogo } from "../img/BackgroundMiniLogo"
import { Menu } from "./navbar_components/Menu"

export function Navbar(){
    const submenus_cadastro = ["Produto", "Seção", "Usuário"]
    const submenus_caixa = ["Abrir caixa"]
    const submenus_fiscal = ["Notas fiscais", "CFOP"]
    const submenus_relatorios = ["Produto", "Notas fiscais", "Estoque"]
    return (
        <nav id={styles.navbar}>
            <BackgroundMiniLogo />
            <ul id={styles.menu}>
                <Menu rotina="Cadastro" submenus={submenus_cadastro}/>
                <Menu rotina="Caixa" submenus={submenus_caixa}/>
                <Menu rotina="Fiscal" submenus={submenus_fiscal}/>
                <Menu rotina="Relatórios" submenus={submenus_relatorios}/>
            </ul>
        </nav>
    )
}