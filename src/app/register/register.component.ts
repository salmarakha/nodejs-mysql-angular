import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/userModel';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstname: FormControl = new FormControl(null, [
    Validators.required
  ]);
  lastname: FormControl = new FormControl(null, [
    Validators.required
  ]);
  email: FormControl = new FormControl(null, [
    Validators.email,
    Validators.required
  ]);
  password: FormControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(4)
  ]);
  phone: FormControl = new FormControl(null, [
    Validators.required,
    Validators.maxLength(11)
  ]);
  dob: FormControl = new FormControl(null, [
    Validators.required
  ]);
  registerForm: FormGroup = new FormGroup({
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    password: this.password,
    phone: this.phone,
    dob: this.dob
  });

  constructor(private router: Router, private userService: UserServiceService) {

  }

  ngOnInit(): void {

  }

  onSubmit(registeredData: any) {
    this.userService.registerUser(registeredData).subscribe((result: any) => {
      console.log(result.user.id);
      this.router.navigate([`${result.user.id}`]);
    },
    (error) => {
      console.log(error);
    })
  }

}
