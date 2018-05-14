import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './components/app.component';

import { routes } from './routes';

// --- Main components
import { FormComponent } from './components/form';
import { PdfComponent } from './components/pdf';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgSelectModule,

        CommonModule,
        BrowserAnimationsModule,
        routes
    ],
    declarations: [
        AppComponent,
        FormComponent,
        PdfComponent,
    ],
    providers: [
        DatePipe,
    ],
    bootstrap: [AppComponent]
})


export class AppModule { }