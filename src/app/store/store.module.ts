import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StaticDataSource } from '../model/static.datasource';
import { ProductRepository } from '../model/product.repository';


@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    ModelModule,
    FormsModule,
    BrowserModule
  ],
  exports: [StoreComponent],
  providers: [StaticDataSource, ProductRepository]

})
export class StoreModule { }
