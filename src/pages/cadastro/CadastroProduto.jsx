import { Input } from "../../components/form/Input";
import { Navbar } from "../../components/navbar/Navbar";
import { Listagem } from "../../components/list/Listagem"
import style from "../../styles/list/listagem_cadastros.module.css"
import blue_button from "../../styles/buttons/bluebutton.module.css"
import filtro from "../../styles/inputs/filtro.module.css"
import { Button } from "../../components/form/Button";
import { useState } from "react";
import { ModeloCadastro } from "./_modeloCadastro";

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
        <ModeloCadastro rotina="produto" listagem={listagem_produto}/>
    )
}