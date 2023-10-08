// Função inicial para exibir menu da aplicação
function menu() {
    // Opções do Menu
    let opcao = Number(prompt("Olá, oque deseja executar?\n1 - Cadastrar Despesa\n2 - Emitir Relatório\n3 - Sair"));

    // Switch para executar a opção escolhida no prompt acima.
    switch (opcao) {
        case 1:
            let categoriaDespesa = Number(prompt("Qual categoria é sua despesa?\n1 - Lanches\n2 - Livros\n3 - Transporte\n4 - Material Didático"));
            cadastroDespesa(categoriaDespesa);
            break;
        case 2:
            let relatorios = Number(prompt("Qual relatório deseja emitir?\n1 - Relatório Unificado\n2 - Relatório Detalhado"));
            emissaoRelatorios(relatorios);
            break;
        case 3:
            alert("Programa encerrado.");
            break;
        default:
            alert("Informe uma opção válida!!")
            menu();
    }
}

// Arrays das catégorias para guardar os dados.
const lanches: any[] = [];
const livros: any[] = [];
const transporte: any[] = [];
const material: any[] = [];

// Função para cadastrar as Despesas
function cadastroDespesa(categoriaDespesa: number) {

    // Dados que devem ser inseridos de cada despesa.
    const descricao: string = String(prompt("Informe a descrição da despesa"))
    const valor = Number(prompt("Informe o valor da despesa"))
    const data = prompt("Informe uma data")
    alert("Despesa cadastrada com sucesso!!")

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
            alert("Informe um valor válido!!")
            menu();

    }
}

// Função para emissão dos relatorios
function emissaoRelatorios(relatorios: number) {
    switch (relatorios) {
        case 1:
            alert(`Relatorio de despesas unificado:\n
            Categoria: Lanche | Valor Total: R$${0}\n

            Categoria: Livros | Valor Total: R$${0}\n

            Categoria: Transporte | Valor Total: R$${0}\n

            Categoria: Material | Valor Total: R$${0}
            `)
            menu();
        case 2:
            alert(`Relatorio de despesas detalhado:\n
            Categoria: Lanche\n
            ${lanches} - \n

            Categoria: Livros\n
            ${livros} - \n

            Categoria: Transporte\n
            ${transporte} - \n

            Categoria: Material\n
            ${material} - 
            `)
        default:
            menu();
    }

}

menu();