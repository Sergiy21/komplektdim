import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from './contact-us.component';
import {ContactModule} from '../../common/contact/contact.module';

@NgModule({
    declarations: [
        ContactUsComponent,
    ],
    imports: [
        CommonModule,
        ContactModule
    ],
    exports: [
        ContactUsComponent
    ],
})
export class ContactUsModule {}
