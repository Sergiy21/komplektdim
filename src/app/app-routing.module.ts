import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/router/home/home.component';
import {MainComponent} from './components/layouts/main/main.component';
import {ColorsModule} from './components/common/colors/colors.module';
import {ContactModule} from './components/common/contact/contact.module';
import {ContactUsComponent} from './components/router/contact-us/contact-us.component';
import {ProductsComponent} from './components/router/products/products.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'products', pathMatch: 'full', component: ProductsComponent },
      { path: 'contact-us', pathMatch: 'full', component: ContactUsComponent },
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
    imports: [
        RouterModule.forRoot(routes),
        ColorsModule,
        ContactModule
    ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
