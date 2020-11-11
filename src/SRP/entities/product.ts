import { BasketBooks } from '../entities/interfaces/basket-books';

export class Product implements BasketBooks {
  public title: string;
  public author: string;
  public price: number;

  constructor(title: string, author: string, price: number) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}
