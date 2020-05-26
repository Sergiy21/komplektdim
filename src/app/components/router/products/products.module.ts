import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {ColorsModule} from '../../common/colors/colors.module';

@NgModule({
    declarations: [
        ProductsComponent,
    ],
    imports: [
        CommonModule,
        ColorsModule
    ],
    exports: [
        ProductsComponent
    ]
})
export class ProductsModule {}
