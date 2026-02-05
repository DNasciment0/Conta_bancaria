import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { Input } from "./src/util/Input";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
  let opcao: number;

  // Testes corrente

  const cc1 = new ContaCorrente(2, 5678, "Bianca", 1, 200000.0, 2000.0);
  cc1.visualizar();

  console.log("Sacar 1000,00: ", cc1.sacar(1000.0));
  console.log("Sacar 200000,00: ", cc1.sacar(200000.0));
  console.log("Depositar 500.00: ");
  cc1.depositar(500.0);
  cc1.visualizar();

  // Testes poupanca

  const cp1 = new ContaPoupanca(1, 2344, "Pedro", 2, 100000.0, 27);
  cp1.visualizar();

  console.log("Sacar 1000,00: ", cp1.sacar(1000.0));
  console.log("Sacar 400000,00: ", cp1.sacar(40000.0));
  console.log("Depositar 500.00: ");
  cp1.depositar(500.0);
  cp1.visualizar();

  while (true) {
    console.log(
      colors.bg.black,
      colors.fg.yellow,
      "****************************************************",
    );
    console.log("                                                     ");
    console.log("                BANCO DO BRAZIL COM Z                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");

    console.log("Entre com a opção desejada: ");

    opcao = Input.questionInt("");

    // c1.visualizar();

    if (opcao == 9) {
      console.log(
        colors.fg.greenstrong,
        "\nBanco do Brazil com Z - O seu Futuro começa aqui!",
      );
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
        //console.log("Digite um texto com acentos: ");
        //let teste = Input.question("");
        //console.log(teste);
        keyPress();
        break;
      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          colors.reset,
        );
        keyPress();
        break;
      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por número\n\n",
          colors.reset,
        );
        keyPress();
        break;
      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset,
        );
        keyPress();
        break;
      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar Conta\n\n",
          colors.reset,
        );
        keyPress();
        break;
      case 6:
        console.log(colors.fg.whitestrong, "\n\nSacar\n\n", colors.reset);
        keyPress();
        break;
      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);
        keyPress();
        break;
      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferir valores entre Contas\n\n",
          colors.reset,
        );
        keyPress();
        break;
      default:
        console.log(
          colors.fg.whitestrong,
          "\nOperacão Inválida!\n",
          colors.reset,
        );
        keyPress();
        break;
    }
  }
}

export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Daniel Nascimento ");
  console.log("d.nasciimento@live.com");
  console.log("github.com/DNasciment0");
  console.log("*****************************************************");
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  Input.prompt();
}

main();
