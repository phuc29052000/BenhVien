import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './authRouting.module';
import { LoginModule } from './login/login.module';
import { AuthComponent } from './auth.component'; // <---
import { TestModule } from './test/test.module';
import { Login1Module } from './login1/login1.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AuthRoutingModule,
    LoginModule,
    TestModule,
    Login1Module
  ],
  declarations: [
    AuthComponent, // <---
  ],
})
export class AuthModule {}
