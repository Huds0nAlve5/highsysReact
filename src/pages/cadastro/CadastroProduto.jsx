import { Input } from "../../components/form/Input";
import { Button } from "../../components/form/Button";
import { Navbar } from "../../components/navbar/Navbar";

export function CadastroProduto(){
    return(
        <>
            <Navbar />
            <Input type="Produto" placeholder="Descrição do produto" name="produto"/>
            <Button type="button" textBtn="Inserir produto"/>
        </>
    )
}