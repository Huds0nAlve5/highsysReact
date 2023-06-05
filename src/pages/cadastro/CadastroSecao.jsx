import { ModeloCadastro } from "./_modeloCadastro";

export function CadastroSecao(){
    const listagem_secao = [
        {
            "seccod": "1",
            "secdes": "Bebidas"
        },
        {
            "seccod": "2",
            "secdes": "Brinquedos"
        }
    ]

    return(
        <ModeloCadastro rotina="seção" listagem={listagem_secao}/>
    )
}