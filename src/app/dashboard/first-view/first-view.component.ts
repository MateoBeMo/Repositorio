import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LanguageStadistics } from '../../../shared/interfaces/language-stadistics';
import { StadisticsService } from '../../../shared/services/stadistics.service';
import { RespuestaService } from '../../../shared/services/respuesta.service';
import { ResultadoQuiz } from '../../interfaces/resultado-quiz';
import { Respuesta } from '../../interfaces/respuesta';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.scss']
})
export class FirstViewComponent implements OnInit {
  closeResult: string;

  pchartColors: any[] = [
    {
      backgroundColor: ["indigo", "	#ff1a1a"]
    }]

  respuestas: Respuesta[] = [];
  pieChartLabels: string[] = ['Resutlados positivos', 'Resultados negativos'];
  pieChartData: number[];
  malas: number = 0;
  buenas: number = 0;
  resultadosNegativos: ResultadoQuiz[] = [];
  resultadosPositivos: ResultadoQuiz[] = [];


  barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType: string = 'bar';
  barChartLegend: boolean = true;
  barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor(private respuestaService: RespuestaService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getData();
    this.getResultadosNegativos();
    this.getResultadosPositivos();
  }

  getData(): void {
    let variable: number[] = [];
    this.respuestaService.getRespuestas().subscribe(data => {
      this.respuestas = data;
      this.respuestas.forEach(r => {
        if (r.idRespuesta === 1055 || r.idRespuesta === 1056 || r.idRespuesta === 1057) {
          this.malas++;
        }
        else {
          this.buenas++;
        }
      });
      variable.push(this.buenas, this.malas);
      // variable.push(this.malas);
      this.pieChartData = variable;
    });
  }
  getResultadosNegativos(): void {
    this.respuestaService.getResultadosNegativos().subscribe(data => {
      this.resultadosNegativos = data;
    });
  }
  getResultadosPositivos(): void {
    this.respuestaService.getResultadosPositivos().subscribe(data => {
      this.resultadosPositivos = data;
      this.resultadosPositivos = this.resultadosPositivos.filter( r => r.respuestas.every( res => res.valoracion === 'Positiva'))
    });
    
  }

  onClickChart(e) {
    if (e.active[0]._index === 1) {
      this.open('Negativos');
      // console.log("negativos")
    } else {
      this.open('Totalmente Positivos');
      // console.log("positivos");
    }

  }
  open(tipo: string) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.tipo = tipo;
    if( tipo === 'Negativos')
      modalRef.componentInstance.resultadosNegativos = this.resultadosNegativos;
    else
    modalRef.componentInstance.resultadosPositivos = this.resultadosPositivos;

  }
}
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Resultados {{tipo}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <ul *ngIf="tipo === 'Negativos'" class="modal-body" style="margin-left: 2.5em;">
      <li *ngFor="let resultado of resultadosNegativos">
       <a [routerLink]="['dashboard/detalle-valoracion', resultado.id]" > ID: {{resultado.id }} , Número de venta: {{resultado.numeroVenta}} </a>
      </li>
      </ul>
    <ul *ngIf="tipo === 'Totalmente Positivos'" class="modal-body">
      <li *ngFor="let resultado of resultadosPositivos" > <a [routerLink]="['dashboard/detalle-valoracion', resultado.id]" > Número de venta: {{resultado.numeroVenta}} </a>
      </li>
    </ul>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }
}