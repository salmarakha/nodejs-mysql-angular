import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/userModel';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: Number = 0;
  loggedUser?: User;
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
  phone: FormControl = new FormControl(null, [
    Validators.required,
    Validators.maxLength(11)
  ]);
  dob: FormControl = new FormControl(null, [
    Validators.required
  ]);
  editForm: FormGroup = new FormGroup({
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    phone: this.phone,
    dob: this.dob
  });

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserServiceService) {
    // Works!! but of a limited use
    // if(this.router.getCurrentNavigation()?.extras.state)
    //   this.loggedUser = this.router.getCurrentNavigation()?.extras.state;
    // console.log(this.loggedUser)
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get("id"))
      this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.userService.getUserDetails(this.id).subscribe((result: { user: User }) => {
      this.loggedUser = result.user;
      this.firstname.setValue(this.loggedUser.firstname);
      this.lastname.setValue(this.loggedUser.lastname);
      this.email.setValue(this.loggedUser.email);
      this.phone.setValue(this.loggedUser.phone);
      this.dob.setValue(this.loggedUser.dob.toString().split('T')[0]);
    },
    (error) => {
      console.log(error)
    });
  }

  onSubmit(editedData: any) {
    this.userService.editUser(this.id, editedData).subscribe((result) => {
      this.router.navigate([`${this.id}`]);
    },
    (error) => {
      console.log(error);
    })
  }

}
