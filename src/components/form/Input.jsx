export function Input({type, placeholder, name, style, setFilter}){
    return(
        <>
            <input type={type} placeholder={placeholder} name={name} className={style} onChange={(e) => setFilter(e.target.value)}/>
        </>
    )
}