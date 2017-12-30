import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './dashboard.routing';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgbModule,
    SharedModule
  ],
  declarations: [DashboardComponent, NavbarComponent]
})
export class DashboardModule { }
