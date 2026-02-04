import leia from "readline-sync";
import { colors } from "./src/util/Colors";

export function main() {
  let opcao: number;

  while (true) {
    // --- INÍCIO DO MENU ---
    // Define a cor de fundo e texto para todo o bloco
    console.log(colors.bg.black, colors.fg.yellow);

    console.log("*******************************************************");
    console.log("                                                       ");
    console.log("             BANCO DO BRAZIL COM Z                     ");
    console.log("                                                       ");
    console.log("*******************************************************");
    console.log("                                                       ");
    console.log("           1 - Criar Conta                             ");
    console.log("           2 - Listar todas as Contas                  ");
    console.log("           3 - Buscar Conta por Número                 ");
    console.log("           4 - Atualizar Dados da Conta                ");
    console.log("           5 - Apagar Conta                            ");
    console.log("           6 - Sacar                                   ");
    console.log("           7 - Depositar                               ");
    console.log("           8 - Transferir valores entre contas         ");
    console.log("           9 - Sair                                    ");
    console.log("                                                       ");
    console.log("*******************************************************");

    // --- PONTO DA CORREÇÃO ---
    // Adicionei o reset aqui para "fechar" o estilo do menu
    console.log(colors.reset);

    opcao = leia.questionInt("Entre com a opcao desejada: ");

    if (opcao === 9) {
      console.log(
        colors.fg.greenstrong,
        "\nBanco do Brazil com Z - O seu Futuro começa aqui!",
        colors.reset, // Boa prática resetar aqui também
      );
      sobre();
      process.exit(0); // Corrigido de 9 para 0 (padrão de sucesso)
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar conta\n\n", colors.reset);
        leia.keyInPause(); // Pausa para o usuário ler antes de voltar ao menu
        break;
      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as contas\n\n",
          colors.reset,
        );
        leia.keyInPause();
        break;
      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por número\n\n",
          colors.reset,
        );
        leia.keyInPause();
        break;
      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset,
        );
        leia.keyInPause();
        break;
      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar uma Conta\n\n",
          colors.reset,
        );
        leia.keyInPause();
        break;
      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
        leia.keyInPause();
        break;
      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);
        leia.keyInPause();
        break;
      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferência entre Contas\n\n",
          colors.reset,
        );
        leia.keyInPause();
        break;
      default:
        console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
        leia.keyInPause();
        break;
    }
  }
}

export function sobre(): void {
  console.log(
    colors.fg.gray,
    "\n*******************************************************",
  );
  console.log("Programa desenvolvido por: Daniel Nascimento.");
  console.log("Github:");
  console.log("LinkedIn: ");
  console.log(
    "*******************************************************",
    colors.reset,
  );
}

main();
