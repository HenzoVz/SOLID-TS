type BasketBooks = {
  title: string;
  author: string;
  price: number;
};

type OrderStatus = 'open' | 'closed';

export class Library {
  private readonly _books: BasketBooks[] = [];
  private _orderStatus: OrderStatus = 'open';

  public addBook(book: BasketBooks): void {
    this._books.push(book);
  }

  public removeBook(index: number): void {
    this._books.splice(index, 1);
  }

  get books(): Readonly<BasketBooks[]> {
    return this._books;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  public total(): number {
    return parseFloat(
      this._books.reduce((total, next) => total + next.price, 0).toFixed(2),
    );
  }

  public checkout(): void {
    if (this.isEmpty()) {
      console.log('Sua cesta está vázia!');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()}`);
    this.saveOrder();
    this.clear();
  }

  public isEmpty(): boolean {
    return this._books.length === 0;
  }

  public sendMessage(msg: string): void {
    console.log('Mensagem enviada', msg);
  }

  public saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  public clear(): void {
    this._books.length = 0;
  }
}
