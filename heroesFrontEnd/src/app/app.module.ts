import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { FortComponent } from './Fort/fort.component';
import { LoginComponent } from './Login/login.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        AppRouting,
        FlexLayoutModule
    ],

    declarations: [
        AppComponent,
        FortComponent,
        LoginComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }