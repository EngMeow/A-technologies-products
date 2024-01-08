import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { InfoComponent } from './components/info/info.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AreaChartComponent } from './components/area-chart/area-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ProductsComponent,
    InfoComponent,
    PieChartComponent,
    AreaChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule, 
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
