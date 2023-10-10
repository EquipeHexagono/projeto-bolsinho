"use strict";
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
function unificado() {
    const exibirRelatorio = document.getElementById("detalhado");
    const conteudo = `Categoria: Lanches\n${lanchesFormatados}\n
    Categoria: Livros\n${livrosFormatados}\n
    Categoria: Transporte\n${transporteFormatados}\n
    Categoria: Material\n${materialFormatados}
    `;
    exibirRelatorio === null || exibirRelatorio === void 0 ? void 0 : exibirRelatorio.textContent = conteudo;
}
