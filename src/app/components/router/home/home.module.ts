import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {ColorsModule} from '../../common/colors/colors.module';
import {ContactModule} from '../../common/contact/contact.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        ColorsModule,
        ContactModule,
        MatIconModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}
