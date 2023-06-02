export function ListagemProduto({listagem_produto, style}){
    return(
        <table className={style.listagem_produto}>
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
                                <td key={produto.procod}>{produto.procod}</td>
                                <td key={produto.prodes}>{produto.prodes}</td>
                            </tr>
                    )
                })}
            </tbody>
        </table>
    )
}