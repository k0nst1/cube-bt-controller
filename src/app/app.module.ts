import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ConnectionPage} from "../pages/connection/connection";
import {ProgramPage} from "../pages/program/program";
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import {TabsPage} from "../pages/tabs/tabs";
import {PlayPage} from "../pages/play/play";



@NgModule({
    declarations: [
        MyApp,
        TabsPage,
        PlayPage,
        ConnectionPage,
        ProgramPage

    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ConnectionPage,
        ProgramPage,
        TabsPage,
        PlayPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Geolocation,
        BluetoothSerial,
        {provide: ErrorHandler, useClass: IonicErrorHandler},

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {
}
