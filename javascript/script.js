"use strict";
// Função inicial para exibir menu da aplicação
function menu() {
    // Opções do Menu
    let opcao = Number(prompt("Olá, oque deseja executar?\n1 - Cadastrar Despesa\n2 - Emitir Relatório\n3 - Sair"));
    // Switch para executar a opção escolhida no prompt acima.
    switch (opcao) {
        case 1:
            let categoriaDespesa = Number(prompt("Qual categoria é sua despesa?\n1 - Lanches\n2 - Livros\n3 - Transporte\n4 - Material Didático"));
            if (categoriaDespesa >= 1 && categoriaDespesa <= 4) {
                cadastroDespesa(categoriaDespesa);
            }
            else {
                alert("Opção inválida.");
                menu();
            }
            break;
        case 2:
            let relatorios = Number(prompt("Qual relatório deseja emitir?\n1 - Relatório Unificado\n2 - Relatório Detalhado"));
            if (relatorios === 1 || relatorios === 2) {
                emissaoRelatorios(relatorios);
            }
            else {
                alert("Opção inválida.");
                menu();
            }
            break;
        case 3:
            alert("Programa encerrado.");
            break;
        default:
            alert("Informe uma opção válida!!");
            menu();
    }
}
// Arrays das catégorias para guardar os dados.
const lanches = [];
const livros = [];
const transporte = [];
const material = [];
// Função para cadastrar as Despesas
function cadastroDespesa(categoriaDespesa) {
    // Dados que devem ser inseridos de cada despesa.
    const descricao = String(prompt("Informe a descrição da despesa"));
    const valor = Number(prompt("Informe o valor da despesa"));
    const data = prompt("Informe uma data");
    alert("Despesa cadastrada com sucesso!!");
    // Switch para guardar os dados na categoria escolhida através do parametro da Função
    switch (categoriaDespesa) {
        case 1:
            lanches.push(descricao);
            lanches.push(valor);
            lanches.push(data);
            menu();
        case 2:
            livros.push(descricao);
            livros.push(valor);
            livros.push(data);
            menu();
        case 3:
            transporte.push(descricao);
            transporte.push(valor);
            transporte.push(data);
            menu();
        case 4:
            material.push(descricao);
            material.push(valor);
            material.push(data);
            menu();
        default:
            alert("Informe um valor válido!!");
            menu();
    }
}
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
            menu();
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
            menu();
        default:
            alert("Informe um valor válido");
            break;
    }
}
function calcularTotalCategoria(categoria) {
    let total = 0;
    for (let i = 0; i < categoria.length; i += 3) {
        total += categoria[i + 1];
    }
    return total;
}