import { Injectable } from '@angular/core';
import { Order } from '../shared/models/Order';
import { HttpClient } from '@angular/common/http';
import { ALL_ORDRES_URL, ORDER_CANCEL_URL, ORDER_CREATE_URL, ORDER_EDIT_URL, ORDER_NEW_FOR_CURRENT_USER, ORDER_PAY_URL, ORDER_TRACK_URL, ORDERED_ITEMS_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  create(order: Order){
    return this.http.post<Order>(ORDER_CREATE_URL, order);
  }

  getNewOrderForCurrentUser():Observable<Order>{
    return this.http.get<Order>(ORDER_NEW_FOR_CURRENT_USER);
  }

  pay(order: Order):Observable<string>{
    return this.http.post<string>(ORDER_PAY_URL, order);
  }

  trackOrderById(id: number): Observable<Order>{
    return this.http.get<Order>(ORDER_TRACK_URL + id);
  }

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(ALL_ORDRES_URL);
  }

  getOrderedItems():Observable<Order[]>{
    return this.http.get<Order[]>(ORDERED_ITEMS_URL);
  }

  cancelOrder(orderId: number): Observable<void> {
    return this.http.delete<void>(`${ORDER_CANCEL_URL}/${orderId}`);
  }

  editOrder(orderId: number, updatedOrder: Order): Observable<Order> {
    return this.http.put<Order>(`${ORDER_EDIT_URL}/${orderId}`, updatedOrder);
  }
}
