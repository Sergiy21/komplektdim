import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './components/layouts/main/main.module';
import { MobileMenuComponent } from './components/common/mobile-menu/mobile-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        MobileMenuComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
