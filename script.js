"use strict";
// Função para emissão dos relatorios
function emissaoRelatorios(relatorios) {
    // Códigos para formatação da exibição do Array no relatorio.
    const lanchesFormatados = lanches.map((lanches, x) => {
        if ((x + 1) % 3 === 0) {
            return `${lanches}\n`;
        }
        else {
            return `${lanches}`;
        }
    }).join(' - ');
    const livrosFormatados = livros.map((livros, y) => {
        if ((y + 1) % 3 === 0) {
            return `${livros}\n`;
        }
        else {
            return `${livros}`;
        }
    }).join(' - ');
    const transporteFormatados = transporte.map((transporte, z) => {
        if ((z + 1) % 3 === 0) {
            return `${transporte}\n`;
        }
        else {
            return `${transporte}`;
        }
    }).join(' - ');
    const materialFormatados = material.map((material, h) => {
        if ((h + 1) % 3 === 0) {
            return `${material}\n`;
        }
        else {
            return `${material}`;
        }
    }).join(' - ');
    // Switch para exibir resultados
    switch (relatorios) {
        case 1:
            alert(`Relatorio de despesas unificado:\n
            Categoria: Lanche | Valor Total: R$${calcularTotalCategoria(lanches).toFixed(2)}\n

            Categoria: Livros | Valor Total: R$${calcularTotalCategoria(livros).toFixed(2)}\n

            Categoria: Transporte | Valor Total: R$${calcularTotalCategoria(transporte).toFixed(2)}\n

            Categoria: Material | Valor Total: R$${calcularTotalCategoria(material).toFixed(2)}
            `);
        case 2:
            alert(`Relatorio de despesas Detalhado:\n
            Categoria: Lanches\n
            ${lanchesFormatados}\n

            Categoria: Livros\n
            ${livrosFormatados}\n

            Categoria: Transporte\n
            ${transporteFormatados}\n

            Categoria: Material\n
            ${materialFormatados}
            `);
        default:
            alert("Informe um valor válido");
            break;
    }
}
