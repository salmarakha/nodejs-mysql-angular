import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userAuthData } from '../models/userAuthData';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  login(user: userAuthData) {
    const whatever = this.http.post("http://localhost:3000/users/login", user);
    console.log(whatever);
    return this.http.post("http://localhost:3000/users/login", user);
  }
}
