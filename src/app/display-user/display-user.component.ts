import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private userService: UserServiceService, private router: Router) { }

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

  // sendObject() {
  //   // use the state to pass data through router
  //   // the problem in this method is that it requires to click the button to send data
  //   // this.router.navigate([`/edit/${this.id}`], { state: { user: this.loggedUser }});

  //   this.editUser.emit(this.loggedUser);
  // }

}
