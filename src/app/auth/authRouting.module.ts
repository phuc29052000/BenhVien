import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component'; // <---

import { AuthComponent } from './auth.component';
import { TestComponent } from './test/test.component';
import { Login1Component } from './login1/login1.component';
export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path:'test',
        component:TestComponent
      },
      {
        path:'login1',
        component:Login1Component
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
