import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LabelComponent } from './label/label.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoBtnComponent } from './info-btn/info-btn.component';
import { RouterModule } from '@angular/router';
import { RedirectGuard } from '../service/redirectGuard.service';
import {ContactService} from '../service/contact.service';
import {TelegramComponent} from './telegram/telegram.component';
import {NetworksComponent} from './networks/networks.component';
import {ClickOutsideDirective} from '../directives/click-outside.directive';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        LabelComponent,
        InfoBtnComponent,
        TelegramComponent,
        NetworksComponent,
        ClickOutsideDirective
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        LabelComponent,
        FormsModule,
        ReactiveFormsModule,
        InfoBtnComponent,
        RouterModule,
        TelegramComponent,
        NetworksComponent,
        ClickOutsideDirective
    ],
  providers: [RedirectGuard,
    ContactService
  ],
})

export class SharedModule {}
