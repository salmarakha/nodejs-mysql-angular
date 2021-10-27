import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components immports
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "/:id",  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
