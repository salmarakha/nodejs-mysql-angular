import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userAuthData } from '../models/userAuthData';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  login(user: userAuthData) {
    return this.http.post("http://localhost:3000/users/login", user);
  }

  getUserDetails(id: Number) {
    return this.http.get<{ user: User }>(`http://localhost:3000/users/${id}`);
  }

  editUser(id: Number, user: any) {
    return this.http.patch(`http://localhost:3000/users/${id}`, user);
  }
}
