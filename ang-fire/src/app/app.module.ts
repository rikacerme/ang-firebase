import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { CommonModule } from "@angular/common";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent, SearchComponent } from './_components';
import { HomeComponent } from './home';
import { ContinentComponent } from './continent'
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatButtonModule } from '@angular/material/button'; 
import { MatMenuModule } from '@angular/material/menu'; 
import { MatListModule } from '@angular/material/list'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

var config = {
    apiKey: "AIzaSyCuZmVwf93sqh3y2otDbiMaMFUmsXeHPdI",
    authDomain: "ang-fire-80c8f.firebaseapp.com",
    databaseURL: "https://ang-fire-80c8f.firebaseio.com",
    projectId: "ang-fire-80c8f",
    storageBucket: "ang-fire-80c8f.appspot.com",
    messagingSenderId: "119432493673",
    appId: "1:119432493673:web:6a956dd6a9e96f72b900f8"
};

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(config),
        AngularFireAuthModule,
        AutocompleteLibModule,
        MatMenuModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatListModule,
        MatBottomSheetModule,
        CommonModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        SearchComponent,
        HomeComponent,
        ContinentComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };