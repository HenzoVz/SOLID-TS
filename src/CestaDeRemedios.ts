export interface IRemedio {
  nome: string;
  preco: number;
}

export interface IStatusDaCompra {
  status: 'aberto' | 'fechado';
}

export class CestaDeRemedios {
  private readonly _remedios: IRemedio[] = [];
  private readonly _status: IStatusDaCompra = { status: 'aberto' };

  get remedios(): Readonly<IRemedio[]> {
    return this._remedios;
  }

  get status(): Readonly<IStatusDaCompra> {
    return this._status;
  }

  adicionar({ ...remedio }: IRemedio): void {
    this._remedios.push(remedio);
  }

  retirar(index: number): void {
    this._remedios.splice(index, 1);
  }

  trocar(index: number, { ...remedio }: IRemedio): IRemedio {
    this._remedios[index] = remedio;
    return remedio;
  }

  valorTotal(desconto?: number): number {
    if (desconto) {
      const total = parseFloat(
        this._remedios
          .reduce((total, next) => total + next.preco, 0)
          .toFixed(2),
      );

      const desc = total * (desconto / 100);
      return parseFloat((total - desc).toFixed(4));
    }
    return parseFloat(
      this._remedios.reduce((total, next) => total + next.preco, 0).toFixed(2),
    );
  }

  estaVazio(): boolean {
    return this._remedios.length === 0;
  }

  verificarCesta(desconto?: number): void {
    if (this.estaVazio()) {
      console.log('A cesta está vazia');
      return;
    }
    this._status.status = 'fechado';
    console.log('Status da compra = ', this.status.status);
    console.log(`Valor total da compra R$ ${this.valorTotal(desconto)}`);
    this.salvar();
    this.limpar();
  }

  salvar(): void {
    console.log('Pedido salvo com sucesso');
  }

  limpar(): void {
    this._remedios.length = 0;
  }
}

const cestaDeRemedios = new CestaDeRemedios();
const remedio01: IRemedio = { nome: 'Sorine', preco: 10.0 };
const remedio02: IRemedio = { nome: 'Selozok', preco: 23.0 };
const remedio03: IRemedio = { nome: 'Xantinom', preco: 20.0 };

cestaDeRemedios.adicionar(remedio01);
cestaDeRemedios.adicionar(remedio02);
cestaDeRemedios.adicionar(remedio03);

console.log('Cesta = ', cestaDeRemedios.remedios);
cestaDeRemedios.verificarCesta(35);
