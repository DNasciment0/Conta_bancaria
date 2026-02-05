import { colors } from "../util/Colors";

export abstract class Conta {
  //Atributos da Classe

  private _numero: number;
  private _agencia: number;
  private _titulo: string;
  private _tipo: number;
  private _saldo: number;

  // Método Construtor

  constructor(
    numero: number,
    agencia: number,
    titulo: string,
    tipo: number,
    saldo: number,
  ) {
    this._numero = numero;
    this._agencia = agencia;
    this._titulo = titulo;
    this._tipo = tipo;
    this._saldo = saldo;
  }

  // Métodos Get e Set

  /**
   * Getter numero
   * @return {number}
   */
  public get numero(): number {
    return this._numero;
  }

  /**
   * Getter agencia
   * @return {number}
   */
  public get agencia(): number {
    return this._agencia;
  }

  /**
   * Getter titulo
   * @return {string}
   */
  public get titulo(): string {
    return this._titulo;
  }

  /**
   * Getter tipo
   * @return {number}
   */
  public get tipo(): number {
    return this._tipo;
  }

  /**
   * Getter saldo
   * @return {number}
   */
  public get saldo(): number {
    return this._saldo;
  }

  /**
   * Setter numero
   * @param {number} value
   */
  public set numero(value: number) {
    this._numero = value;
  }

  /**
   * Setter agencia
   * @param {number} value
   */
  public set agencia(value: number) {
    this._agencia = value;
  }

  /**
   * Setter titulo
   * @param {string} value
   */
  public set titulo(value: string) {
    this._titulo = value;
  }

  /**
   * Setter tipo
   * @param {number} value
   */
  public set tipo(value: number) {
    this._tipo = value;
  }

  /**
   * Setter saldo
   * @param {number} value
   */
  public set saldo(value: number) {
    this._saldo = value;
  }

  //Métodos Auxiliares

  public sacar(valor: number): boolean {
    if (valor <= 0) {
      console.log(colors.fg.red, "O valor deve ser positivo", colors.reset);
      return false;
    }

    if (valor > this.saldo) {
      console.log(colors.fg.red, "Saldo Insuficiente!", colors.reset);
      return false;
    }

    this._saldo -= valor;
    return true;
  }

  public depositar(valor: number): void {
    if (valor <= 0)
      console.log(colors.fg.red, "O valor deve ser positivo", colors.reset);
    else this._saldo += valor;
  }
  public visualizar(): void {
    let tipo: string;

    switch (this._tipo) {
      case 1:
        tipo = "Conta Corrente";
        break;
      case 2:
        tipo = "Conta Poupanca";
        break;
      default:
        tipo = "Tipo Invalido";
    }

    console.log("\n**********************************");
    console.log("           DADOS DA CONTA         ");
    console.log("**********************************");
    console.log(`Número da conta: ${this._numero}`);
    console.log(`Número da agencia: ${this._agencia}`);
    console.log(`Nome da titular: ${this._titulo}`);
    console.log(`Tipo da conta: ${tipo}`);
    console.log(`Saldo da conta:${this._saldo.toFixed(2)}`);
  }
}
