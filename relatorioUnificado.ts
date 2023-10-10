function calcularTotalCategoria(categoria: any[]): number {
    let total = 0;
    for (let i = 0; i < categoria.length; i += 3) {
        total += categoria[i + 1];
    }

    return total;
}

function unificado() {
    const exibirRelatorio = document.getElementById("unificado");

    const conteudo = `Categoria: Lanche | Valor Total: R$${calcularTotalCategoria(lanches)}\n
    Categoria: Livros | Valor Total: R$${calcularTotalCategoria(livros)}\n
    Categoria: Transporte | Valor Total: R$${calcularTotalCategoria(transporte)}\n
    Categoria: Material | Valor Total: R$${calcularTotalCategoria(material)}
    `;

    exibirRelatorio?.textContent = conteudo;
}