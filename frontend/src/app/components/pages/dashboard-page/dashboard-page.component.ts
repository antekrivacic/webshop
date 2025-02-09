import { Component } from '@angular/core';
import { User } from '../../../shared/models/User';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: false,
  
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

  users!: User[];

  constructor(private userService : UserService){
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    })
  }

  deleteUser(id: string){
    
  }
}
