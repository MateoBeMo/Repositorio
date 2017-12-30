import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './approval-quiz.routing';
import { ApprovalQuizComponent } from './approval-quiz.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ApprovalQuizComponent]
})
export class ApprovalQuizModule { }
