import { Component } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  standalone: false,
  
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  cart!: Cart;
  
  constructor(private cartService: CartService){
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.item.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.item.id, quantity);
  }

  increaseQuantity(cartItem: CartItem){
    if(cartItem.quantity >= 9) return;
    this.cartService.increaseQuantity(cartItem.item.id);
  }

  decreaseQuantity(cartItem: CartItem){
    if(cartItem.quantity <= 1) return;
    this.cartService.decreaseQuantity(cartItem.item.id);
  }
}
