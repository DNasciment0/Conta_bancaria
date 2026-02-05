import { colors } from "../util/Colors";
import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
  private _diadoaniversio: number;

  constructor(
    numero: number,
    agencia: number,
    titulo: string,
    tipo: number,
    saldo: number,
    diadoaniversio: number,
  ) {
    super(numero, agencia, titulo, tipo, saldo);
    this._diadoaniversio = diadoaniversio;
  }

  public get diadoaniversio(): number {
    return this._diadoaniversio;
  }

  public set diadoaniversio(value: number) {
    this._diadoaniversio = value;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Dia do aniversário da Conta: ${this._diadoaniversio}`);
  }
}
