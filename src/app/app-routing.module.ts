import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components immports
import { LoginComponent } from './login/login.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: ":id", component: DisplayUserComponent },
  { path: "edit/:id", component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
