import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ContactRoutingModule
    ],
    declarations: [
        ContactComponent
    ]
})

export class ContactModule {}