import style from '../../styles/form/formLogin.module.css'

export function Input({styleClass, type, placeholder, name}){
    return(
        <>
            <input type={type} placeholder={placeholder} name={name} />
        </>
    )
}