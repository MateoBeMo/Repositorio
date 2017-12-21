import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'first-view', pathMatch: 'full'},
      { path: 'first-view', loadChildren: 'app/dashboard/first-view/first-view.module#FirstViewModule', },
      { path: 'second-view', loadChildren: 'app/dashboard/second-view/second-view.module#SecondViewModule', }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
