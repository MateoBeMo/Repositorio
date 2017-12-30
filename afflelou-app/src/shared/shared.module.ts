
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CardComponent } from './components/card/card.component';
import { AlertComponent } from './components/alert/alert.component';

// Providers
import { CustomerService } from './services/customer.service';
import { StadisticsService } from './services/stadistics.service';
import { AuthService } from './services/auth.service';
import { EmployeeService } from './services/employee.service';
import { UserService } from './services/user.service';
import { UtilsService } from './services/utils.service';
import { QuizService } from './services/quiz.service';
import { HelperService } from './services/helper.service';

export const providers = [
  CustomerService, StadisticsService, AuthService, EmployeeService, UserService, UtilsService, QuizService, HelperService,
];

@NgModule({
    declarations: [CardComponent, AlertComponent],
    imports: [CommonModule],
    providers: [],
    exports: [CardComponent, AlertComponent]
  })
  export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [providers]
        };
    }
  }
