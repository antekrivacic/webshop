import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { Item } from '../../../shared/models/Item';
import { ItemService } from '../../../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{

  items:Item[] = [];
  constructor(private itemService: ItemService, activatedRoute: ActivatedRoute,
    private renderer: Renderer2
  ) {
    let itemsObservable : Observable<Item[]>;

    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        itemsObservable = this.itemService.getAllItemsBySearchTerm(params.searchTerm);
      else if(params.tag)
        itemsObservable = this.itemService.getAllItemsByTag(params.tag);
      else
        itemsObservable = this.itemService.getAll();

        itemsObservable.subscribe((serverItems) => {
          this.items = serverItems
        })
    })
  }
  ngAfterViewInit(): void {
    AOS.init();
    this.addAosAttributes();
  }

  addAosAttributes(): void {
    const elements = document.querySelectorAll('app-search, app-tags, app-not-found, li');
    elements.forEach(element => {
      this.renderer.setAttribute(element, 'data-aos', 'fade-in');
      this.renderer.setAttribute(element, 'data-aos-duration', '1000');

    });
  }
}
