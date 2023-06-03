export function Input({type, placeholder, name, style, setProdFilter}){
    return(
        <>
            <input type={type} placeholder={placeholder} name={name} className={style} onChange={(e) => setProdFilter(e.target.value)}/>
        </>
    )
}