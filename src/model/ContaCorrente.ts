import { colors } from "../util/Colors";
import { formatarMoeda } from "../util/Currency";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
  // Atributos específicos de Conta Corrente
  private _limite: number;

  // Construtor com a chamada para a Super Classe
  constructor(
    numero: number,
    agencia: number,
    titulo: string,
    tipo: number,
    saldo: number,
    limite: number,
  ) {
    super(numero, agencia, titulo, tipo, saldo);
    this._limite = limite;
  }

  // Métodos GET e SET específicos da Classe Conta Corrente

  /**
   * Getter limite
   * @return {number}
   */
  public get limite(): number {
    return this._limite;
  }

  /**
   * Setter limite
   * @param {number} value
   */
  public set limite(value: number) {
    this._limite = value;
  }

  // Método visualizar sobrescrito(Polimorfismo)
  public visualizar(): void {
    super.visualizar();
    console.log(`Limite da conta: ${formatarMoeda(this._limite)}`);

    // Método sacar sabrescrito
  }
  public sacar(valor: number): boolean {
    if (valor <= 0) {
      console.log(colors.fg.red, "O valor deve ser positivo", colors.reset);
      return false;
    }

    if (valor > this.saldo + this._limite) {
      console.log(colors.fg.red, "Saldo Insuficiente!", colors.reset);
      return false;
    }

    this.saldo -= valor;
    return true;
  }
}
