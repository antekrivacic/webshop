import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: false,
  
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  @Input()
  visible = false;
  @Input()
  notFoundMessage = 'Nothing found';
  @Input()
  resetLinkText = "Reset";
  @Input()
  resetLinkRoute ="/";

  
}
