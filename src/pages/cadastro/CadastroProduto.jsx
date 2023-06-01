import { Input } from "../../components/form/Input";
import { Button } from "../../components/form/Button";
import { Navbar } from "../../components/navbar/Navbar";
import { ListagemProduto } from "../../components/list/produtos/ListagemProduto"
import style from "../../styles/list/listagemproduto.module.css"

export function CadastroProduto(){
    const listagem_produto = [
        {
            "procod": "1",
            "prodes": "Coca cola zero 2l"
        },
        {
            "procod": "2",
            "prodes": "Coca cola lata"
        },
        {
            "procod": "3",
            "prodes": "Brinquedo lego levi ackerman"
        },
    ]
    
    return(
        <>
            <Navbar />
            <Input type="Produto" placeholder="Descrição do produto" name="produto"/>
            <Button type="button" textBtn="Inserir produto"/>
            <ListagemProduto listagem_produto={listagem_produto} style={style}/>
        </>
    )
}