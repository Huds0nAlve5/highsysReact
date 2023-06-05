import { Input } from "../../components/form/Input";
import { Navbar } from "../../components/navbar/Navbar";
import { Listagem } from "../../components/list/Listagem"
import style from "../../styles/list/listagem_cadastros.module.css"
import blue_button from "../../styles/buttons/bluebutton.module.css"
import filtro from "../../styles/inputs/filtro.module.css"
import { Button } from "../../components/form/Button";
import { useState } from "react";

export function ModeloCadastro({rotina, listagem}){
    const [filter, setFilter] = useState("")
    const itensFiltrados = listagem.filter(item_list => (
        Object.values(item_list)[1].toUpperCase().includes(filter.toUpperCase()) ||
        Object.values(item_list)[0].toUpperCase().includes(filter.toUpperCase())
    ))

    return(
        <>
            <Navbar />
            <div className={style.inserir_e_filtrar}>
                <Input type="text" placeholder={"Buscar " + rotina} name={rotina} style={filtro.input} setFilter={setFilter}/>
                <Button type="button" textBtn="Adicionar" style={blue_button.blue_button}/>
            </div>

            {
                filter.length == 0 ? 
                (<Listagem listagem={listagem} style={style} />) : 
                <Listagem listagem={itensFiltrados} style={style} />
            }
            
        </>
    )
}