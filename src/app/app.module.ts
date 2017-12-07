import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { GraficosComponent } from './graficos/graficos.component';
import { PrincipalComponent } from './principal/principal.component'


@NgModule({
  declarations: [
    AppComponent,
    GraficosComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
