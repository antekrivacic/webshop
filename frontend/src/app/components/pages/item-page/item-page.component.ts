import { Component } from '@angular/core';
import { Item } from '../../../shared/models/Item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../../services/item.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-item-page',
  standalone: false,
  
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {

  item!: Item;
  constructor(activatedRoute : ActivatedRoute, itemService: ItemService,
    private cartService: CartService, 
    private router: Router) {

    activatedRoute.params.subscribe((params) => {
      if(params.id)
        this.item = itemService.getItemById(params.id);
    }); 
  }

  addToCart(){
    this.cartService.addToCart(this.item);
    this.router.navigateByUrl('/cart-page');
  }
}
