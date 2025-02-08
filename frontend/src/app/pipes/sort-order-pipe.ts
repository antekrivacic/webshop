import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../shared/models/Order';

@Pipe({
  name: 'sortOrders'
})
export class SortOrdersPipe implements PipeTransform {

  transform(orders: Order[], order: 'asc' | 'desc' = 'asc'): Order[] {
    return orders.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      if (order === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  }
}