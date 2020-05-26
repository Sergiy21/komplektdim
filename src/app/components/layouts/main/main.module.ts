import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {FooterComponent} from '../../common/footer/footer.component';
import {HeaderModule} from '../../common/header/header.module';
import {ProductsModule} from '../../router/products/products.module';
import {ContactUsModule} from '../../router/contact-us/contact-us.module';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    declarations: [
        MainComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        HeaderModule,
        ProductsModule,
        ContactUsModule,
        MatSidenavModule
    ],
    exports: [
        MainComponent,
        FooterComponent
    ]
})
export class MainModule {}
