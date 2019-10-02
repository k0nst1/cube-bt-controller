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
import { ConnectionProvider } from '../providers/connection/connection';
import {IonicStorageModule} from "@ionic/storage";
import {BluetoothLE} from "@ionic-native/bluetooth-le";


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
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()

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
        ConnectionProvider,
        StatusBar,
        SplashScreen,
        Geolocation,
        BluetoothSerial,
        BluetoothLE,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectionProvider,

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {
}
