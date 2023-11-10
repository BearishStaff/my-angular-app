import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionComponent } from './action/action.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SquareFlexComponent } from './square-flex/square-flex.component';

import { HttpClientModule } from  '@angular/common/http';
import { TestRequestModule } from './test-request/test-request.module';
import { SumComponent } from './sum/sum.component';

import { FormsModule } from '@angular/forms';

import {TableModule} from 'primeng/table'
import {InputTextModule} from 'primeng/inputtext'
import {ButtonModule} from 'primeng/button'

import { ShoppingModule } from './shopping/shopping.module'

@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    MaxMinMeterComponent,
    SquareFlexComponent,
    SumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestRequestModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ShoppingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
