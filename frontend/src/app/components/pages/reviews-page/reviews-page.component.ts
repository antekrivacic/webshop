import { Component, OnInit } from '@angular/core';
import { Review } from '../../../shared/models/Review';
import { ReviewService } from '../../../services/review.service';
import { ItemService } from '../../../services/item.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';
import { Item } from '../../../shared/models/Item';

@Component({
  selector: 'app-reviews-page',
  standalone: false,
  
  templateUrl: './reviews-page.component.html',
  styleUrl: './reviews-page.component.css'
})
export class ReviewsPageComponent implements OnInit{

  reviews! : Review[];
  user!: User;
  item!: Item;

  constructor(private reviewService : ReviewService,
    private itemService: ItemService,
    private userService: UserService,
  ){

  }

  ngOnInit(): void {
      this.loadReviews();
  }

  loadReviews(): void{
    this.reviewService.getReviews().subscribe((data: Review[]) => {
      this.reviews = data;
    });
  }

  

}
