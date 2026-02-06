import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {
  private listaContas = new Array<Conta>();

  public numero: number = 0;

  // Métodos do CRUD
  procurarPorNumero(numero: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) buscaConta.visualizar();
    else console.log(colors.fg.red, "\nConta não encontrada!", colors.reset);
  }

  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }

  cadastrar(Conta: Conta): void {
    this.listaContas.push(Conta);
    console.log(
      colors.fg.green,
      `\nA Conta número ${Conta.numero} foi cadastrada com sucesso!`,
      colors.reset,
    );
  }

  atualizar(Conta: Conta): void {
    const buscaConta = this.buscarNoArray(Conta.numero);

    if (buscaConta !== null) {
      this.listaContas[this.listaContas.indexOf(buscaConta)] = Conta;
      console.log(
        colors.fg.green,
        `\nA Conta número ${Conta.numero} foi atualizada com sucesso!`,
        colors.reset,
      );
    } else console.log(colors.fg.red, "\nConta não encontrada!", colors.reset);
  }

  deletar(numero: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) {
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log(
        colors.fg.green,
        `\nA Conta número ${numero} foi deletada com sucesso!`,
        colors.reset,
      );
    } else console.log(colors.fg.red, "\nConta não encontrada!", colors.reset);
  }

  sacar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  //Métodos Auxiliares

  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) return conta;
    }

    return null;
  }
}
