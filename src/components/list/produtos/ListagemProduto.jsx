export function ListagemProduto({listagem_produto, style}){
    return(
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Descrição</th>
                </tr>
            </thead>

            <tbody>
                {listagem_produto.map((produto, index) => {
                    return(
                            <tr key={index}>
                                <td className={style.listagem_produto} key={produto.procod}>{produto.procod}</td>
                                <td key={produto.prodes}>{produto.prodes}</td>
                            </tr>
                    )
                })}
            </tbody>
        </table>
    )
}