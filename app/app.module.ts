import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app-final.component';
import { CustomChartComponent } from './custom-chart/custom-chart.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { CommonModule } from '@angular/common';
import { ChartsModule } from '@progress/kendo-angular-charts';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,

    ButtonsModule,
    IndicatorsModule,
    CommonModule,
    ChartsModule,
  ],
  declarations: [AppComponent, CustomChartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
