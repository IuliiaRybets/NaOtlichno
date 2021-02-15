import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { PayComponent } from './pay.component';
import { PayRoutingModule } from './pay-routing.module';

@NgModule({
    imports: [
        SharedModule,
        PayRoutingModule
    ],
    declarations: [
        PayComponent
    ]
})

export class PayModule {}