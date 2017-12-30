import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login } from './login.component';
import { routing } from './login.routing';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    Login,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    SharedModule,
  ]
})
export class LoginModule {}
