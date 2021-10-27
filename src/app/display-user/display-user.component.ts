import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/userModel';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  id: Number = 0;
  loggedUser?: User;

  constructor(private route: ActivatedRoute, private userService: UserServiceService) { }

  ngOnInit(): void {
    // get the user id from the current activated route
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.userService.getUserDetails(this.id).subscribe((result: { user: User }) => {
      this.loggedUser = result.user;
      
    },
    (error) => {
      console.log(error);
    });
  }

}
