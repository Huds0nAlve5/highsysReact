export function Input({type, placeholder, name, style}){
    return(
        <>
            <input type={type} placeholder={placeholder} name={name} className={style}/>
        </>
    )
}