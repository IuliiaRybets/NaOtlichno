import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';
import { ContactComponent } from './contact/contact.component';
import { PriceComponent } from './price/price.component';
import { PayComponent } from './pay/pay.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PriceComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
