import { IStatusDaCompra } from '../interfaces/IStatusDaCompra';
import { Mensagem } from '../services/Mensagem';
import { RemedioRepository } from '../repositories/RemedioRepository';
import { CestaDeRemedios } from './CestaDeRemedios';

export class StatusDaCesta {
  private readonly _status: IStatusDaCompra = { status: 'aberto' };
  private readonly cestaDeRemedios: CestaDeRemedios;
  private readonly mensagem: Mensagem;
  private readonly remedioRepository: RemedioRepository;

  constructor(
    cestaDeRemedios: CestaDeRemedios,
    mensagem: Mensagem,
    remedioRepository: RemedioRepository,
  ) {
    this.cestaDeRemedios = cestaDeRemedios;
    this.mensagem = mensagem;
    this.remedioRepository = remedioRepository;
  }

  get status(): IStatusDaCompra {
    return this._status;
  }

  verificarCesta(desconto?: number): void {
    if (this.cestaDeRemedios.estaVazio()) {
      console.log('A cesta está vazia');
      return;
    }
    this._status.status = 'fechado';
    console.log('Status da compra = ', this.status.status);
    this.mensagem.enviarMensagem(
      `Valor total da compra R$ ${this.cestaDeRemedios.valorTotal(desconto)}`,
    );
    this.remedioRepository.salvar();
    this.cestaDeRemedios.limpar();
  }
}
