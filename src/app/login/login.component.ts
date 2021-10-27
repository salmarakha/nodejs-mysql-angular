import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private token: String = "";
  invalidLogin: boolean = false;

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

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(formInputs: any) {
    console.log(formInputs);
    this.userService.login(formInputs).subscribe((result: any) => {
      this.token = result.token;
      this.invalidLogin = false;
      localStorage.setItem("token", this.token.toString());
      localStorage.setItem("id", result.userId);
      this.router.navigate([`${result.userId}`]);
    },
    (error) => {
      // email or password is probably incorrect (just a guess, errors should be handeled here)
      this.invalidLogin = true;
    })
  }

}
