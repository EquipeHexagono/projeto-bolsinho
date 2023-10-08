function menu() {
    let opcao = Number(prompt("Olá, oque deseja executar ?\n1 - Cadastrar Despesa\n2 - Emitir Relatorio\n3 - Sair"));

    switch (opcao) {
        case 1:
            let categoriaDespesa = Number(prompt("Qual catégoria é sua despesa:\n1 - Lanches\n2 - Livros\n3 - Transporte\n4 - Material Didático"));
            cadastroDespesa(categoriaDespesa);
            break;
        case 2:
            let relatorios = Number(prompt("Qual relatoiro deseja emitir:\n1 - Relatorio Unificado\n2 - Relatorio Detalhado"));
            break;
        case 3:
            alert("Você Saiu");
            break;
        default:
            alert("Informe uma opção válida!!")
    }
}

function cadastroDespesa(categoriaDespesa: number) {
    const livros: any[] = [];
}

menu();