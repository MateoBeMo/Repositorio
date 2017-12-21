import { Component, OnInit} from '@angular/core';
import { Customer } from '../../../shared/interfaces/customer';
import { CustomerService } from '../../../shared/services/customer.service';


@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.scss']
})
export class SecondViewComponent implements OnInit {

  show: boolean;
  customers: Customer[];

  constructor(private customerService:  CustomerService) { }

  ngOnInit() {
  }

  showCard(): void {
    this.show = true;
  }
  getCustomers(): void {
   this.customerService.getCustomers().subscribe(data => this.customers = data);
  }

}
