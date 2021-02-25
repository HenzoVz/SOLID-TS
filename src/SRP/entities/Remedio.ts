import { IRemedio } from '../interfaces/IRemedio';

export class Remedio implements IRemedio {
  constructor(public nome: string, public preco: number) { }
}
