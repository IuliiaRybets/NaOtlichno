import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LabelComponent } from './label/label.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoBtnComponent } from './info-btn/info-btn.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        LabelComponent,
        InfoBtnComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        LabelComponent,
        FormsModule,
        ReactiveFormsModule,
        InfoBtnComponent
    ],

})

export class SharedModule {}