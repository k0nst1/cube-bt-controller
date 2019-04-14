import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectionPage } from './connection';

@NgModule({
  declarations: [
    ConnectionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectionPage),
  ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class ConnectionPageModule {}
