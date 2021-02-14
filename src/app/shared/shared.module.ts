import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        NgbModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],

})

export class SharedModule {}