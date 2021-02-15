import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { PriceComponent } from './price.component';
import { PriceRoutingModule } from './price-routing.module';

@NgModule({
    imports: [
        SharedModule,
        PriceRoutingModule
    ],
    declarations: [
        PriceComponent
    ]
})

export class PriceModule {}