import { Input } from "../../components/form/Input";
import { Navbar } from "../../components/navbar/Navbar";
import { ListagemProduto } from "../../components/list/produtos/ListagemProduto"
import style from "../../styles/list/listagemproduto.module.css"
import blue_button from "../../styles/buttons/bluebutton.module.css"
import entrada from "../../styles/inputs/input.module.css"
import { Button } from "../../components/form/Button";

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
            <div className={style.inserir_e_filtrar}>
                <Input type="Produto" placeholder="Descrição do produto" name="produto" style={entrada.entrada}/>
                <Button type="button" textBtn="Novo produto" style={blue_button.blue_button}/>
            </div>
            <ListagemProduto listagem_produto={listagem_produto} style={style}/>
        </>
    )
}