import { IonicModule } from 'ionic-angular';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports:
        [
            IonicModule,
            CommonModule,
            FormsModule,
        ],
    declarations:
        [
        ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class TabsPageModule {}