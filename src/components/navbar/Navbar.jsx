import styles from "../../styles/navbar/navbar.module.css"
import { BackgroundMiniLogo } from "../img/BackgroundMiniLogo"

export function Navbar(){
    return (
        <nav id={styles.navbar}>
            <BackgroundMiniLogo />
        </nav>
    )
}