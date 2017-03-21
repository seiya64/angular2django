import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FortComponent } from './Fort/fort.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule
    ],

    declarations: [
        AppComponent,
        FortComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }