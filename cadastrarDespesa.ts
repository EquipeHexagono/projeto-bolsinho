// Arrays das catégorias para guardar os dados.
const lanches: any[] = [];
const livros: any[] = [];
const transporte: any[] = [];
const material: any[] = [];


function cadastrarLanche() {
    const descricao = document.getElementById("descricao");
    const valor = document.getElementById("valor");
    const data = document.getElementById("data");

    lanches.push(valor);
    lanches.push(data)
    lanches.push(descricao);
}

function cadastrarLivro() {
    const descricao = document.getElementById("descricao");
    const valor = document.getElementById("valor");
    const data = document.getElementById("data");

    livros.push(valor);
    livros.push(data);
    livros.push(descricao);
}

function cadastrarTransporte() {
    const descricao = document.getElementById("descricao");
    const valor = document.getElementById("valor");
    const data = document.getElementById("data");

    transporte.push(valor);
    transporte.push(data);
    transporte.push(descricao);
}

function cadastrarMaterial() {
    const descricao = document.getElementById("descricao");
    const valor = document.getElementById("valor");
    const data = document.getElementById("data");

    material.push(descricao);
    material.push(valor);
    material.push(data);
}