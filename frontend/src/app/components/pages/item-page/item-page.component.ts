import { Component } from '@angular/core';
import { Item } from '../../../shared/models/Item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../../services/item.service';
import { CartService } from '../../../services/cart.service';
import { Review } from '../../../shared/models/Review';
import { ReviewService } from '../../../services/review.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-item-page',
  standalone: false,
  
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {

  item!: Item;
  reviews!: Review[];

  constructor(activatedRoute : ActivatedRoute, itemService: ItemService,
    private cartService: CartService, 
    private router: Router,
    private reviewService: ReviewService, private userService: UserService
  ){

    activatedRoute.params.subscribe((params) => {
      if(params.id)
        itemService.getItemById(params.id).subscribe(serverItem => {
          this.item = serverItem;
      });
    });
    this.loadReviews();
  }

  addToCart(){
    this.cartService.addToCart(this.item);
    this.router.navigateByUrl('/cart-page');
  }

  loadReviews(): void{
    this.reviewService.getReviews().subscribe((data: Review[]) => {
      this.reviews = data.filter(review => review.item === this.item.id);
      this.reviews.forEach(review => {
        this.userService.getUserById(review.user).subscribe(user => {
          review.user = user.name;
        });
      });
    });
  }
  
}
