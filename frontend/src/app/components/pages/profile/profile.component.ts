import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';
import { ConfirmDialogComponent } from '../../partials/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  profileForm!: FormGroup;
  isSubmitted = false;
  user!: User;

  constructor(private fb: FormBuilder,
     private userService: UserService,
     private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.user = this.userService.currentUser;
        
    this.profileForm = this.fb.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      address: [this.user.address, Validators.required],
      password: ['', [Validators.minLength(5)]],
      confirmPassword: ['']
    },{
    }
  );
  }

  get fc() {
    return this.profileForm.controls;
  }

  submit(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      
      if(result){
        this.isSubmitted = true;
        if (this.profileForm.invalid) {
          return;
        }

        const updatedUser = {
          ...this.user,
          ...this.profileForm.value
        };

        this.userService.updateUser(updatedUser).subscribe({
          next: () => {
            this.user = updatedUser;
            localStorage.setItem('user', JSON.stringify(this.user));
            this.isSubmitted = false;
          },
          error: (error) => {
            this.isSubmitted = false;
          }
        });
      }
      
    });
    
  }
}
