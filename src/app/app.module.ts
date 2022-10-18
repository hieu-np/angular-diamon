import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductComponent } from './components/product/product.component';
import { SlideComponent } from './components/slide/slide.component';
import { CurrencyVnPipe } from './pipes/currency-vn.pipe';
import {ImageModule} from 'primeng/image';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CartComponent,
    ProductlistComponent,
    ProductComponent,
    SlideComponent,
    CurrencyVnPipe,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImageModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
