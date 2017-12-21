import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LanguageStadistics } from '../../../../shared/interfaces/language-stadistics';
import { Chartinfo } from '../../../interfaces/chart-info';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  barChartLabels: string[] = ['C++', 'Ruby', 'Phyton', 'Java', 'Javascript', 'C#', 'PHP'];

    chartInfo: Chartinfo = {
      labels: this.barChartLabels,
      type: 'bar',
      leyend: false,
      title: 'Programming languages'
    };

  language: string;

  @Input() data: LanguageStadistics[];
  @Output() addLanguage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  add(): void {
    this.addLanguage.emit(this.language);
    this.language = ' ';
  }
}
