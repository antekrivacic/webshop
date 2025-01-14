import { Component } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-tags',
  standalone: false,
  
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  tags?: Tag[];

  constructor(itemService: ItemService){
    itemService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }

  
}
