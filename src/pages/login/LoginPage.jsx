import { Button } from '../../components/form/Button'
import { Input } from '../../components/form/Input'
import style from '../../styles/form/formLogin.module.css'
import { BackgroundLogo } from '../../components/img/BackgroundLogo'

export function LoginPage(){
    const loginSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <>
            <div id={style.div_body}>
                <form onSubmit={loginSubmit} className={style.login_form}>
                    <BackgroundLogo />
                    <Input placeholder="usuário" type="text" name="username"/>
                    <Input placeholder="senha" type="password" name="password"/>
                    <Button type="submit" textBtn="Login" style={style.login_button}/>
                </form>
            </div>
        </>
    )
}