import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../../shared/interfaces/employee';
import { EmployeeService } from '../../../shared/services/employee.service';

@Component({
  selector: 'app-approval-quiz',
  templateUrl: './approval-quiz.component.html',
  styleUrls: ['./approval-quiz.component.scss']
})
export class ApprovalQuizComponent implements OnInit {

  employees: Employee[];

  constructor(private router: Router, private employeeSerivice: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
  siguiente(): void {
    this.router.navigate(['quiz/start-quiz']);
  }
  getEmployees(): void {
    this.employees = this.employeeSerivice.getEmployee();
  }
}
