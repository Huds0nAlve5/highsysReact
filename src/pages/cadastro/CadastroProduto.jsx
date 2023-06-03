import { Input } from "../../components/form/Input";
import { Navbar } from "../../components/navbar/Navbar";
import { ListagemProduto } from "../../components/list/produtos/ListagemProduto"
import style from "../../styles/list/listagemproduto.module.css"
import blue_button from "../../styles/buttons/bluebutton.module.css"
import filtro from "../../styles/inputs/filtro.module.css"
import { Button } from "../../components/form/Button";
import { useState } from "react";

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

    const [prodFilter, setProdFilter] = useState("")
    const prodFiltrados = listagem_produto.filter(produto => (
        produto.prodes.toUpperCase().includes(prodFilter.toUpperCase())
    ))

    return(
        <>
            <Navbar />
            <div className={style.inserir_e_filtrar}>
                <Input type="Produto" placeholder="Buscar produto" name="produto" style={filtro.input} setProdFilter={setProdFilter}/>
                <Button type="button" textBtn="Novo produto" style={blue_button.blue_button}/>
            </div>

            {prodFilter.length == 0? 
            (<ListagemProduto listagem_produto={listagem_produto} style={style}/>) : 
            <ListagemProduto listagem_produto={prodFiltrados} style={style}/>
            }
            
        </>
    )
}