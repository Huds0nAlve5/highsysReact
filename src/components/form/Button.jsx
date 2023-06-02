export function Button({type, textBtn, style}){
    return (
        <input type={type} value={textBtn} className={style}/>
    )
}