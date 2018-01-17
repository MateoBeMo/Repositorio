import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Customer } from '../../../shared/interfaces/customer';
import { CustomerService } from '../../../shared/services/customer.service';
import { RespuestaService } from '../../../shared/services/respuesta.service';
// import { ViewEncapsulation } from '@angular/compiler/src/core';



@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SecondViewComponent implements OnInit {

  // rows = [
  //   { numeroVenta: 'Austin', vendedor: 'Male', fecha: 'Swimlane', options: 'Aparcao'},
  //   { numeroVenta: 'Dany', vendedor: 'Male', fecha: 'KFC' },
  //   { numeroVenta: 'Molly', vendedor: 'Female', fecha: 'Burger King' },
  // ];
  rows = [];
  temp = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { name: 'Numero Venta' },
    { name: 'Vendedor' },
    { name: 'Optometrista' },
    { name: 'Entrega Gafa' },
    { name: 'Fecha' },
  ];



  show: boolean;
  customers: Customer[];

  constructor(private customerService:  CustomerService, private respuestaService: RespuestaService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.respuestaService.getResultados().subscribe(data => this.rows = data);
  }

}
