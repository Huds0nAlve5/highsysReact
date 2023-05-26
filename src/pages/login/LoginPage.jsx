import { Button } from '../../components/form/Button'
import { Input } from '../../components/form/Input'
import style from '../../styles/form/formLogin.module.css'
import { BackgroundIMG } from '../../components/img/BackgroundIMG'

export function LoginPage(){
    const loginSubmit = (e) => {
        e.preventDefault()
    }

    return(<>
            <form onSubmit={loginSubmit} className={style.login_form}>
                <BackgroundIMG />
                <Input placeholder="usuário" type="text" name="username"/>
                <Input placeholder="senha" type="password" name="password"/>
                <Button type="submit" textBtn="Entrar"/>
            </form>
        </>
    )
}