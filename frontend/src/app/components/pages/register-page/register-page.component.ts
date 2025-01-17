import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PasswordMatchValidator } from '../../../shared/validators/password_match_validator';
import { IUserRegister } from '../../../shared/interfaces/IUserRegister';

@Component({
  selector: 'app-register-page',
  standalone: false,
  
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit{

  registerFrom!: FormGroup;
  isSubmitted = false;

  returnUrl = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.registerFrom = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(6)]]
    },{
      validators: PasswordMatchValidator('password', 'confirmPassword')
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc() {
    return this.registerFrom.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.registerFrom.invalid) return;

    const fv = this.registerFrom.value;
    const user : IUserRegister = {
      name: fv.name,
      email: fv.email,
      password: fv.password,
      confirmPassword: fv.confirmPassword,
      address: fv.address
    };

    this.userService.register(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }
}
