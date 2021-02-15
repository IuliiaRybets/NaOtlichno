import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LabelComponent } from './label/label.component';

@NgModule({
    imports: [
        NgbModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        LabelComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        LabelComponent
    ],

})

export class SharedModule {}