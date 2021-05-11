import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { PayModule } from './pay/pay.module';
import { PriceModule } from './price/price.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TelegramComponent } from './shared/telegram/telegram.component';
import { NetworksComponent } from './shared/networks/networks.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    AboutModule,
    ContactModule,
    PriceModule,
    PayModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
