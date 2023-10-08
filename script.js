"use strict";
function menu() {
    let opcao = Number(prompt("Olá, oque deseja executar?\n1 - Cadastrar Despesa\n2 - Emitir Relatório\n3 - Sair"));
    switch (opcao) {
        case 1:
            let categoriaDespesa = Number(prompt("Qual categoria é sua despesa?\n1 - Lanches\n2 - Livros\n3 - Transporte\n4 - Material Didático"));
            cadastroDespesa(categoriaDespesa);
            break;
        case 2:
            let relatorios = Number(prompt("Qual relatório deseja emitir?\n1 - Relatório Unificado\n2 - Relatório Detalhado"));
            break;
        case 3:
            alert("Programa encerrado.");
            break;
        default:
            alert("Informe uma opção válida!!");
    }
}
function cadastroDespesa(categoriaDespesa) {
    const livros = [];
}
menu();
