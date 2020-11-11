import { Messaging } from '../services/messaging';
import { Order } from '../entities/order';
import { Persistency } from '../services/persistency';
import { Library } from '../entities/manager-books';

const library = new Library();
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(library, messaging, persistency);

library.addBook({ title: 'Cálculo 1', author: 'James Stweart', price: 150 });
library.addBook({ title: 'Cálculo 2', author: 'James Stweart', price: 150 });
library.addBook({ title: 'Cálculo 3', author: 'James Stweart', price: 150 });

console.log(library.books);
console.log(library.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
