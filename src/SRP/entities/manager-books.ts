import { BasketBooks } from '../interfaces/basket-books';

export class Library {
  private readonly _books: BasketBooks[] = [];

  public addBook(book: BasketBooks): void {
    this._books.push(book);
  }

  public removeBook(index: number): void {
    this._books.splice(index, 1);
  }

  get books(): Readonly<BasketBooks[]> {
    return this._books;
  }

  public total(): number {
    return parseFloat(
      this._books.reduce((total, next) => total + next.price, 0).toFixed(2),
    );
  }

  public isEmpty(): boolean {
    return this._books.length === 0;
  }

  public clear(): void {
    this._books.length = 0;
  }
}
