import { Injectable } from '@angular/core';
import { Item } from '../shared/models/Item';
import { sample_items, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getAll():Item[]{
    return sample_items;
  }

  getAllItemsBySearchTerm(searchTerm: string){
    return this.getAll().filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllItemsByTag(tag: string):Item[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(item => item.tags?.includes(tag));
  }

  getItemById(id: string):Item{
    return this.getAll().find(item => item.id == id) ?? new Item();
  }
  
}
