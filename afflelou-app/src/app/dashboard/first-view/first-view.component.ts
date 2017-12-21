import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LanguageStadistics } from '../../../shared/interfaces/language-stadistics';
import { StadisticsService } from '../../../shared/services/stadistics.service';


@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.scss']
})
export class FirstViewComponent implements OnInit {

  languageData: LanguageStadistics[];

  constructor(private dataService: StadisticsService) {}

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.dataService.getLanguagesData().subscribe(data => this.languageData = data);
  }
  add(e): void {
    this.dataService.addLanguage(e).subscribe( data => this.getData());
  }
}
