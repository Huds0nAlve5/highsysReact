import { Button } from '../../components/form/Button'
import { Input } from '../../components/form/Input'
import { Img } from '../../components/img/Img'
import style from '../../styles/form/formLogin.module.css'
import imgLogo from "../../../public/img/logo/logo.png"
import { BackgroundIMG } from '../../components/img/BackgroundIMG'

export function LoginPage(){
    const loginSubmit = (e) => {
        e.preventDefault()
    }

    return(<>
            <form onSubmit={loginSubmit} className={style.login_form}>
                <BackgroundIMG src={imgLogo}/>
                <Input placeholder="Usuário" type="text" name="username"/>
                <Input placeholder="Senha" type="password" name="password"/>
                <Button type="submit" textBtn="login"/>
            </form>
        </>
    )
}