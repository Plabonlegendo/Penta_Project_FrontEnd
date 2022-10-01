import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';
import { AdminPersonsListComponent } from './components/admin/admin-persons-list/admin-persons-list.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/password-reset/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/password-reset/reset-password/reset-password.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminPageComponent},
  { path: 'resources_admin', component: AdminPersonsListComponent},
  { path: 'forget_password', component: ForgetPasswordComponent },
  { path: 'reset_password' + '/:token', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
