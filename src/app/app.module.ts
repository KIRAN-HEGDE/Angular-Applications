import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { StaticDataSource } from './model/static.datasource';
import { ProductRepository } from './model/product.repository';


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductRepository, StaticDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
