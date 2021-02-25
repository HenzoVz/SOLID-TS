import { IRemedio } from '../interfaces/IRemedio';

export class CestaDeRemedios {
  private readonly _remedios: IRemedio[] = [];

  get remedios(): Readonly<IRemedio[]> {
    return this._remedios;
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

  public estaVazio(): boolean {
    return this._remedios.length === 0;
  }

  public limpar(): void {
    this._remedios.length = 0;
  }
}
