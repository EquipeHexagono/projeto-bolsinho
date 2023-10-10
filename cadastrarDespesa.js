"use strict";
// Arrays das catégorias para guardar os dados.
const lanches = [];
const livros = [];
const transporte = [];
const material = [];
function cadastrarLanche() {
    const descricao = document.getElementById("descricao");
    const valor = document.getElementById("valor");
    const data = document.getElementById("data");
    lanches.push(valor);
    lanches.push(data);
    lanches.push(descricao);
    let respostaSucesso = alert("Despesa Cadastrada com sucesso");
}
function cadastrarLivro() {
    const descricao = document.getElementById("descricao");
    const valor = document.getElementById("valor");
    const data = document.getElementById("data");
    livros.push(valor);
    livros.push(data);
    livros.push(descricao);
    let respostaSucesso = alert("Despesa Cadastrada com sucesso");
}
function cadastrarTransporte() {
    const descricao = document.getElementById("descricao");
    const valor = document.getElementById("valor");
    const data = document.getElementById("data");
    transporte.push(valor);
    transporte.push(data);
    transporte.push(descricao);
    let respostaSucesso = alert("Despesa Cadastrada com sucesso");
}
function cadastrarMaterial() {
    const descricao = document.getElementById("descricao");
    const valor = document.getElementById("valor");
    const data = document.getElementById("data");
    material.push(descricao);
    material.push(valor);
    material.push(data);
    let respostaSucesso = alert("Despesa Cadastrada com sucesso");
}
