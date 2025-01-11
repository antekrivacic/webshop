import { Component } from '@angular/core';
import { Item } from '../../../shared/models/Item';
import { ItemService } from '../../../services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  items:Item[] = [];
  constructor(private itemService: ItemService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        this.items = this.itemService.getAllItemsBySearchTerm(params.searchTerm);
      else if(params.tag)
        this.items = this.itemService.getAllItemsByTag(params.tag);
      else
        this.items = this.itemService.getAll();
    })

  }


}
