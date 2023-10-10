// Arrays das catégorias para guardar os dados.
const lanches: any[] = [];
const livros: any[] = [];
const transporte: any[] = [];
const material: any[] = [];

// Dados que devem ser inseridos de cada despesa.
const descricao = document.getElementById("descricao");
const valor = document.getElementById("valor");
const data = document.getElementById("data");

function cadastrarLanche() {
    lanches.push(valor);
    lanches.push(data)
    lanches.push(descricao);
}

function cadastrarLivro() {
    livros.push(valor);
    livros.push(data);
    livros.push(descricao);
}

function cadastrarTransporte() {
    transporte.push(valor);
    transporte.push(data);
    transporte.push(descricao);
}

function cadastrarMaterial{
    material.push(descricao);
    material.push(valor);
    material.push(data);
}