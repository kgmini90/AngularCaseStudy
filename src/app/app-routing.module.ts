import { AuthGuard } from './guard/auth.guard';
import { MainCompComponent } from './main-comp/main-comp.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginCompComponent, pathMatch: 'full'},
  {path: 'main', component: MainCompComponent,
    canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
