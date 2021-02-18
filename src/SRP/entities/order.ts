import { OrderStatus } from '../interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { Library } from './manager-books';

export class Order {
  private _orderStatus: OrderStatus = { status: 'open' };
  private readonly library: Library;
  private readonly messaging: Messaging;
  private readonly persistency: Persistency;

  constructor(
    library: Library,
    messaging: Messaging,
    persistency: Persistency,
  ) {
    this.library = library;
    this.messaging = messaging;
    this.persistency = persistency;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  public checkout(): void {
    if (this.library.isEmpty()) {
      console.log('Seu carrinho está vázio');
      return;
    }
    this._orderStatus.status = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.library.total()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.library.clear();
  }
}
