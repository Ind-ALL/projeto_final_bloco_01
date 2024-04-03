//Importar a biblioteca readline-sync, para fazer entrada de dados via teclado
import readlinesync = require("readline-sync");

//Criação da função main(), será a função principal do projeto . Foi adicionado a palavra "export" para tornar a função acessível fora da Classe Menu
export function main() {
  //Variável que recebera as opções do Menu
  let opcao: number;

  //Laço de repetição, para gerar o Menu e repeti-lo na tela. Iniciamos com "true" para que o loop seja infinito
  while (true) {
    console.log("\n");
    console.log("+---------------------------------------+");
    console.log("|                                       |");
    console.log("|          Jogatina Galática            |");
    console.log("|                                       |");
    console.log("+---------------------------------------+");
    console.log("|            Menu de Opções             |");
    console.log("+---------------------------------------+");
    console.log("|                                       |");
    console.log("|      1 - Listar todos os Produtos     |");
    console.log("|      2 - Listar produto pelo ID       |");
    console.log("|      3 - Cadastrar produto            |");
    console.log("|      4 - Atualizar produto            |");
    console.log("|      5 - Deletar produto              |");
    console.log("|      0 - Sair                         |");
    console.log("|                                       |");
    console.log("+---------------------------------------+");
    console.log("|       Entre com a opção desejada:     |");
    //Recebendo os dados via teclado, irá ler o número int e armazenar a variável em "opcao"
    opcao = readlinesync.questionInt("");
    console.log("+---------------------------------------+");

    //Verificar se a opção será 5 - Caso seja, será exibida a mensagem de saída. E será executado o método sobre(), que irá exibir os dados da pessoa desenvolvedora e o programa será finalizado
    if (opcao == 0) {
      console.log("\nA Jogatina Galática agradece a preferencia!");
      console.log("Que a força esteja com voce!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\nListar Todos os Produtos\n\n");
        break;

      case 2:
        console.log("\nListar Produtos pelo ID\n\n");
        break;

      case 3:
        console.log("\nCadastrar Produto\n\n");
        break;

      case 4:
        console.log("\nAtualizar Produto\n\n");
        break;
      case 5:
        console.log("\nDeletar Produto\n\n");
        break;
      default:
        console.log("\nOpção inválida\n");
        break;
    }
  }
}

export function sobre(): void {
  console.log("+---------------------------------------------------+");
  console.log("|                                                   |");
  console.log("|      Projeto Desenvolvido por: Ingrid Alves       |");
  console.log("|      github: https://github.com/Ind-ALL           |");
  console.log("|                                                   |");
  console.log("+---------------------------------------------------+");
}

function keyPress(): void {
  console.log("---------------------------------");
  console.log("Precione enter para continuar...");
  readlinesync.prompt();
}

main();
