//Importar a biblioteca readline-sync, para fazer entrada de dados via teclado
import readlinesync = require("readline-sync");
import { Plastation5 } from "./src/model/plastation5";
import { SuperNintendo } from "./src/model/superNintendo";
import { ProdutoController } from "./src/controller/produtoController";
import { colors } from "./src/util/colors";

//Criação da função main(), será a função principal do projeto . Foi adicionado a palavra "export" para tornar a função acessível fora da Classe Menu
export function main() {
  
  let opcao, id, plataforma, ano, preco: number;
  let nome: string;
  let plataformaProduto = ["Plastation 5", "Super Nintendo"];

  // Objeto da Classe ProdutoController
  const produtoController: ProdutoController = new ProdutoController();

  // const jogoPs5: Plastation5 = new Plastation5(1, "God Of War", 1, 2021, 60);
  

  //Laço de repetição, para gerar o Menu e repeti-lo na tela. Iniciamos com "true" para que o loop seja infinito
  while (true) {
    console.log(
      colors.fg.cyan,
      "                                                     "
    );
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
    console.log("                                         ", colors.reset);
    console.log(colors.bg.cyan, colors.fg.whitestrong,"        Entre com a opção desejada:      ", colors.reset);
    //Recebendo os dados via teclado, irá ler o número int e armazenar a variável em "opcao"
    opcao = readlinesync.questionInt("");
    console.log("\n");

    //Verificar se a opção será 5 - Caso seja, será exibida a mensagem de saída. E será executado o método sobre(), que irá exibir os dados da pessoa desenvolvedora e o programa será finalizado
    if (opcao == 0) {
      console.log(colors.fg.cyanstrong,"\nA Jogatina Galática agradece a preferencia!");
      console.log("Que a força esteja com voce!", colors.reset);
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.bg.cyan, colors.fg.whitestrong, "    Listar Todos os Produtos    ", colors.reset);
        console.log("\n");
        
        produtoController.listarTodos();

        keyPress();
        break;

      case 2:
        console.log(colors.bg.cyan, colors.fg.whitestrong,"   Listar Produtos pelo ID   ", colors.reset);
        console.log("\n");

        id = readlinesync.questionInt("Digite o Id do Produto: ");
        produtoController.procurarPorId(id);

        keyPress();
        break;

      case 3:
        console.log(colors.bg.cyan, colors.fg.whitestrong, "    Cadastrar Produto   ", colors.reset);
        console.log("\n");

        nome = readlinesync.question("Digite o Nome do Jogo: ");

        console.log("Digite o tipo de plataforma: ");
        plataforma = readlinesync.keyInSelect(plataformaProduto, "", { cancel: false }) + 1;

        ano = readlinesync.questionFloat("Digite o ano do Jogo: ");

        preco = readlinesync.questionFloat("Digite o preco: ");

        switch (plataforma) {
          case 1:
              produtoController.cadastrar(new Plastation5(produtoController.gerarId(),
                  nome, plataforma, ano, preco));
              break;
          case 2:
              produtoController.cadastrar(new SuperNintendo(produtoController.gerarId(),
                  nome, plataforma, ano, preco));
              break;
        }
        
        keyPress();
        break;

      case 4:
        console.log(colors.bg.cyan, colors.fg.whitestrong, "    Atualizar Produto   ", colors.reset);
        console.log("\n");

        id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
        let produto = produtoController.buscarNoArray(id);

        if (produto !== null){

            nome = readlinesync.question("Digite o Nome do jogo: ");

            plataforma = produto.plataforma;

            ano = readlinesync.questionInt("Digite o ano do jogo: ")

            preco = readlinesync.questionFloat("Digite o preco do produto: ");

            switch (plataforma) {
                case 1:
                    produtoController.atualizar(new Plastation5(id,
                        nome, plataforma, ano, preco));
                    break;
                case 2:
                    produtoController.atualizar(new SuperNintendo(id,
                        nome, plataforma, ano, preco));
                    break;
            }

        }else
            console.log(colors.bg.red, colors.fg.redstrong,"Produto não Encontrado!", colors.reset)

        keyPress();
        break;
      case 5:
        console.log(colors.bg.cyan, colors.fg.whitestrong, "    Deletar Produto   ", colors.reset);
        console.log("\n");

        id = readlinesync.questionInt("Digite o Id do Produto: ");
        produtoController.deletar(id);
        
        keyPress();
        break;
      default:
        console.log(colors.bg.red, colors.fg.redstrong, "Opção inválida", colors.reset);

        keyPress();
        break;
    }
  }
}

export function sobre(): void {
  console.log(colors.fg.cyanstrong,"+---------------------------------------------------+");
  console.log(" |                                                   |");
  console.log(" |      Projeto Desenvolvido por: Ingrid Alves       |");
  console.log(" |      github: https://github.com/Ind-ALL           |");
  console.log(" |                                                   |");
  console.log(" +---------------------------------------------------+", colors.reset);
}

function keyPress(): void {
  console.log("--------------------------------------");
  console.log("Precione enter para continuar...");
  readlinesync.prompt();
}

main();
