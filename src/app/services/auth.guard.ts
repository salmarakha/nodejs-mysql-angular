import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: UserServiceService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id")
      if(token) {
        if(id != route.paramMap.get("id")) {
          this.router.navigate(['/']);
          return false;
        }
      } else return false;
    return true;
  }

}
