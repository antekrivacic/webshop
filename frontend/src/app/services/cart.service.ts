import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Item } from '../shared/models/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}

  addToCart(item: Item):void{
    let cartItem = this.cart.items.find(i => i.item.id === item.id);
    if(cartItem) return;

    this.cart.items.push(new CartItem(item));
    this.setCartToLocalStorage();
  }

  removeFromCart(itemId: string): void {
    this.cart.items = this.cart.items
      .filter(i => i.item.id != itemId);
    this.setCartToLocalStorage();
  }

  changeQuantity(itemId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(i => i.item.id === itemId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.item.price;
    this.setCartToLocalStorage();
  }

  increaseQuantity(itemId: string): void {
    let cartItem = this.cart.items
      .find(i => i.item.id === itemId);
    if (!cartItem) return;

    cartItem.quantity++;
    cartItem.price = cartItem.quantity * cartItem.item.price;
    this.setCartToLocalStorage();
  }

  decreaseQuantity(itemId: string): void {
    let cartItem = this.cart.items
      .find(i => i.item.id === itemId);
    if (!cartItem) return;

    cartItem.quantity--;
    cartItem.price = cartItem.quantity * cartItem.item.price;
    if (cartItem.quantity === 0) {
      this.removeFromCart(itemId);
    }
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart{
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}