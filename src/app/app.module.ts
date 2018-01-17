import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from '../shared/shared.module';
import { QuizModule } from './quiz/quiz.module';
import { LoginModule } from './login/login.module';

import { LoggedInGuard } from './logged-in.guard';

// libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//Modal
import { NgbdModalContent } from './dashboard/first-view/first-view.component';




@NgModule({
  declarations: [AppComponent, NgbdModalContent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    DashboardModule,
    QuizModule,
    LoginModule,
    SharedModule.forRoot(),
    NgbModule.forRoot(),
    ChartsModule,
    NgxDatatableModule
  ],
  providers: [LoggedInGuard],
  entryComponents: [NgbdModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
