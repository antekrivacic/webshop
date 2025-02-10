import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/User';
import { UserService } from '../../../services/user.service';
import { ConfirmDialogComponent } from '../../partials/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard-page',
  standalone: false,
  
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit {

  users!: User[];
  currentUser!: User;

  constructor(private userService : UserService,
    private dialog: MatDialog  ){
    
      
  }
 
  ngOnInit() : void{
    this.loadUsers();
    this.currentUser = this.userService.currentUser;
  }

  loadUsers(): void{
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  deleteUser(id: string) :void{
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(id).subscribe({
          next: () => {
            this.userService.getUsers().subscribe((data: User[]) => {
              this.users = data;
            })
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    });
    this.loadUsers();
  }
}
