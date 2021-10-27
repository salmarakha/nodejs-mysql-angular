import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // declare the form
  // Validating Form using Reactive form validation
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  email = this.loginForm.get('email');
  password = this.loginForm.get('password');

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {

  }

  onSubmit(formInputs: any) {
    console.log(formInputs);
    this.userService.login(formInputs).subscribe((result) => {
      console.log(result);
    })
  }

}
