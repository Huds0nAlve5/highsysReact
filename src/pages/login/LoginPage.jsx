import { Button } from '../../components/form/Button'
import { Input } from '../../components/form/Input'
import style from '../../styles/form/formLogin.module.css'

export function LoginPage(){
    const loginSubmit = (e) => {
        e.preventDefault()
    }

    return(<>
            <form onSubmit={loginSubmit} className={style.login_form}>
                <Input placeholder="Usuário" type="text" name="username"/>
                <Input placeholder="Senha" type="password" name="password"/>
                <Button type="submit" textBtn="login"/>
            </form>
        </>
    )
}