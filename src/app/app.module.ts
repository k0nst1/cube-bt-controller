import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ConnectionPage} from "../pages/connection/connection";
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import {ProcedurePage} from "../pages/procedure/procedure";


@NgModule({
    declarations: [
        MyApp,
        ConnectionPage,
        ProcedurePage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ConnectionPage,
        ProcedurePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Geolocation,
        BluetoothSerial,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {
}
