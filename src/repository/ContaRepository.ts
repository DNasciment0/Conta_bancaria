import { Conta } from "../model/Conta";

export interface ContaRepository {
  //Métodos do CRUD (Create, Read, Update, Delete)
  procurarPorNumero(numero: number): void;
  listarTodas(): void;
  cadastrar(Conta: Conta): void;
  atualizar(Conta: Conta): void;
  deletar(numero: number): void;

  //Métodos Bancários
  sacar(numero: number, valor: number): void;
  depositar(numero: number, valor: number): void;
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}
