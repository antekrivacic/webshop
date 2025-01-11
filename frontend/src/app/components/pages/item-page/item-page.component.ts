import { Component } from '@angular/core';
import { Item } from '../../../shared/models/Item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-item-page',
  standalone: false,
  
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {

  item!: Item;
  constructor(activatedRoute : ActivatedRoute, itemService: ItemService){
    activatedRoute.params.subscribe(params => {
      this.item = itemService.getItemById(params.id);
    }); 
  }

  
}
