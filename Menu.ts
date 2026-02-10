import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { Input } from "./src/util/Input";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";
import { log } from "node:console";
import { formatarMoeda } from "./src/util/Currency";

// Criar um Objeto Global da Classe ContaController
const contas = new ContaController();

// Criar um array contendo os tipos de conta
const tipoContas = [`Conta Corrente`, `Conta Poupanca`];

export function main() {
  let opcao: number;

  criarContasTeste();

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
    console.log("            9 - Buscar Conta por Nome do Titular     ");
    console.log("            0 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");

    console.log("Entre com a opção desejada: ");

    opcao = Input.questionInt("");

    if (opcao === 0) {
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
        criarConta();
        keyPress();
        break;
      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          colors.reset,
        );
        contas.listarTodas();
        keyPress();
        break;
      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por número\n\n",
          colors.reset,
        );
        buscarContaPorNumero();
        keyPress();
        break;
      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset,
        );
        atualizarConta();
        keyPress();
        break;
      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar Conta\n\n",
          colors.reset,
        );
        deletarContaPorNumero();
        keyPress();
        break;
      case 6:
        console.log(colors.fg.whitestrong, "\n\nSacar\n\n", colors.reset);

        sacar();

        keyPress();
        break;
      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

        depositar();

        keyPress();
        break;
      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferir valores entre Contas\n\n",
          colors.reset,
        );

        transferir();

        keyPress();
        break;
      case 9:
        console.log(
          colors.fg.whitestrong,
          "\n\nProcurar Conta por Nome do Titular\n\n",
          colors.reset,
        );

        procurarPorTitular();
        keyPress();
        break;

      default:
        console.log(
          colors.fg.whitestrong,
          "\nOperacão Inválida!\n",
          colors.reset,
        );
        keyPress();
    }
  }
}

// Opcao 1: Criar uma nova conta

function criarConta() {
  console.log("Digite o número da agencia: ");
  const agencia = Input.questionInt("");

  console.log("Digite o nome do titular ");
  const titular = Input.question("");

  console.log("Digite o tipo de conta: ");
  const tipo = Input.keyInSelect(tipoContas, "", { cancel: false }) + 1;

  console.log("Digite o saldo da conta: ");
  const saldo = Input.questionFloat("");

  switch (tipo) {
    case 1: // Conta Corrente
      console.log("Digite o limite da conta: ");
      const limite = Input.questionFloat("");
      contas.cadastrar(
        new ContaCorrente(
          contas.gerarNumero(),
          agencia,
          titular,
          tipo,
          saldo,
          limite,
        ),
      );
      break;
    case 2: // Conta Poupanca
      console.log("Digite o dia do  aniversário da conta: ");
      const aniversario = Input.questionInt("");
      contas.cadastrar(
        new ContaPoupanca(
          contas.gerarNumero(),
          agencia,
          titular,
          tipo,
          saldo,
          aniversario,
        ),
      );
      break;
  }
}
//Opcao 2: Veja o case 2 do Menu

function listarTodasContas(): void {
  contas.listarTodas();
}
//Opcao 3: Procurar uma Conta Pelo numero

function buscarContaPorNumero(): void {
  console.log("Digite o número da conta: ");
  const numero = Input.questionInt("");

  contas.procurarPorNumero(numero);
}
//Opcao 4: Atualizar os dados de uma Conta

function atualizarConta(): void {
  console.log("Digite o número da conta: ");
  const numero = Input.questionInt("");

  const conta = contas.buscarNoArray(numero);

  if (conta !== null) {
    // Guarda os  valores atuais da conta
    let agencia: number = conta.agencia;
    let titular: string = conta.titulo;
    const tipo: number = conta.tipo;
    let saldo: number = conta.saldo;

    //Atualizacão da Agencia
    console.log(`\nAgencia Atual: ${agencia}`);
    console.log(
      "Digite o número da nova Agencia \n (Pressione ENTER para manter o valor atual",
    );
    let entrada = Input.question("");

    agencia = entrada.trim() === "" ? agencia : parseInt(entrada);

    // Atualizacao do Titular
    console.log(`\nNome Atual do Titular: ${titular}`);
    console.log(
      "Digite o novo nome do titular \n (Pressione ENTER para manter o valor atual",
    );
    entrada = Input.question("");

    titular = entrada.trim() === "" ? titular : entrada;

    // Atualizacão do Saldo
    console.log(`\nSaldo Atual: ${formatarMoeda(saldo)}`);
    console.log(
      "Digite o valor do novo saldo \n (Pressione ENTER para manter o valor atual",
    );
    saldo = Input.questionFloat("", { defaultInput: saldo });

    //saldo =
    // entrada.trim() === "" ? saldo : parseFloat(entrada.replace(",", "."));//

    //Atualizacão do Tipo

    switch (tipo) {
      case 1: {
        // Conta Corrente
        /**
         * Como o objeto 'conta' é do tipo genérico Conta,
         * precisamos converter o objeto (casting) para o tipo
         * ContaCorrente.
         * Isso é necessário porque apenas a classe ContaCorrente
         * possui o atributo 'limite'.
         * Após o casting, conseguimos acessar o atributo limite.
         * O mesmo será feito com o atributo aniversario da classe
         * ContPoupanca
         */
        let limite: number = (conta as ContaCorrente).limite;

        // Atualizacão de Limite

        console.log(`\nLimite atual: ${formatarMoeda(limite)}`);
        console.log("Digite o valor do novo limite: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        limite = Input.questionFloat("", { defaultInput: limite });

        contas.atualizar(
          new ContaCorrente(numero, agencia, titular, tipo, saldo, limite),
        );
        break;
      }
      case 2: {
        // Conta Poupanca

        let aniversario: number = (conta as ContaPoupanca).aniversario;

        // Atualizacão do Aniversário
        console.log(`\nAniversário Atual: ${aniversario}`);
        console.log("Digite o novo dia do aniversário: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        aniversario = Input.questionInt("", { defaultInput: aniversario });

        contas.atualizar(
          new ContaPoupanca(numero, agencia, titular, tipo, saldo, aniversario),
        );
        break;
      }
    }
  } else {
    console.log(
      colors.fg.red,
      `A conta número ${numero} não existe!`,
      colors.reset,
    );
  }
}
//Opcao 5: Deletar uma Conta Pelo numero

function deletarContaPorNumero(): void {
  console.log("Digite o número da conta: ");
  const numero = Input.questionInt("");

  // Verifica se a conta existe
  const conta = contas.buscarNoArray(numero);

  // Se a conta existir...
  if (conta !== null) {
    // Exibe a mensagem de confirmação da exclusão (Yes ou No)
    console.log(
      colors.fg.whitestrong,
      `\nTem certeza que deseja deletar a conta número ${numero} [y/n]?`,
      colors.reset,
    );
    const confirma = Input.keyInYNStrict("");

    // Se cofirmar (y), deleta a conta
    if (confirma) contas.deletar(numero);
    else console.log(colors.fg.red, "\nOperação cancelada!", colors.reset);
  } else {
    console.log(
      colors.fg.red,
      `A conta número ${numero} não foi encontrada!`,
      colors.reset,
    );
  }
}
function sacar(): void {
  console.log("Digite o número da conta: ");
  const numero = Input.questionInt("");

  const conta = contas.buscarNoArray(numero);

  if (conta !== null) {
    console.log("Digite o valor do saque: ");
    const valor = Input.questionFloat("");

    contas.sacar(numero, valor);
  } else {
    console.log(
      colors.fg.red,
      `A conta número ${numero} não foi encontrada!`,
      colors.reset,
    );
  }
}

function depositar(): void {
  console.log("Digite o número da conta: ");
  const numero = Input.questionInt("");

  const conta = contas.buscarNoArray(numero);

  if (conta !== null) {
    console.log("Digite o valor do depósito: ");
    const valor = Input.questionFloat("");

    contas.depositar(numero, valor);
  } else {
    console.log(
      colors.fg.red,
      `A conta número ${numero} não foi encontrada!`,
      colors.reset,
    );
  }
}
function transferir(): void {
  console.log("Digite o número da Conta de Origem: ");
  const numeroOrigem = Input.questionInt("");

  console.log("Digite o número da Conta de Destino: ");
  const numeroDestino = Input.questionInt("");

  const contaOrigem = contas.buscarNoArray(numeroOrigem);
  const contaDestino = contas.buscarNoArray(numeroDestino);

  if (contaOrigem === null) {
    console.log(
      colors.fg.red,
      `A Conta de Origem número ${numeroOrigem} não foi encontrada!`,
      colors.reset,
    );
  } else if (contaDestino === null) {
    console.log(
      colors.fg.red,
      `A Conta de Destino número ${numeroDestino} não foi encontrada!`,
      colors.reset,
    );
  } else {
    console.log("Digite o valor da Transferência: ");
    const valor = Input.questionFloat("");

    contas.transferir(numeroOrigem, numeroDestino, valor);
  }
}
function procurarPorTitular(): void {
  // Solicita o nome do titular
  console.log("Digite o Nome do Titular: ");
  const titular = Input.question("");

  // Localiza a conta a partir do nome do titular
  contas.procurarPorTitular(titular);
}

/**
 * Dados da pessoa desenvolvedora
 */
export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Daniel Nascimento ");
  console.log("d.nasciimento@live.com");
  console.log("github.com/DNasciment0");
  console.log("*****************************************************");
}

//Funcao de pausa entre as opcoes do menu
function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  Input.prompt();

  // Teste de criacao de conta
}

function criarContasTeste(): void {
  // Instâncias da Classe ContaCorrente
  contas.cadastrar(
    new ContaCorrente(
      contas.gerarNumero(),
      1234,
      "Amanda Magro",
      1,
      1000000.0,
      100000.0,
    ),
  );
  contas.cadastrar(
    new ContaCorrente(
      contas.gerarNumero(),
      4578,
      "João da Silva",
      1,
      1000.0,
      100.0,
    ),
  );

  // Instâncias da Classe ContaPoupança
  contas.cadastrar(
    new ContaPoupanca(
      contas.gerarNumero(),
      5789,
      "Geana Almeida",
      2,
      10000,
      10,
    ),
  );
  contas.cadastrar(
    new ContaPoupanca(contas.gerarNumero(), 5698, "Jean Lima", 2, 15000, 15),
  );
}

main();
