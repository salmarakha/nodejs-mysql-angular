import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("token");
    console.log(token);
    // cloning the request to avoid any errors
    // we can provide an objet to edit the cloned request
    const authRequest = request.clone({
      headers: request.headers.set('Authorization', "Bearer " + token || "")
      // set does not overwrite the headers it just adds to it
    });
    return next.handle(authRequest);
  }
}
