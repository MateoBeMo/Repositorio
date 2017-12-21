import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './first-view.routing';

import { FirstViewComponent } from '../first-view/first-view.component';
import { BarChartComponent } from '../first-view/bar-chart/bar-chart.component';
import { PieChartComponent } from '../first-view/pie-chart/pie-chart.component';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, routing, SharedModule
  ],
  declarations: [FirstViewComponent, BarChartComponent, PieChartComponent]
})
export class FirstViewModule { }
