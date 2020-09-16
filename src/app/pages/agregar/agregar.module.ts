import { NgModule } from '@angular/core';
import { AgregarComponent } from './agregar.component';
import { CommonModule } from '@angular/common';
import {
    NbCardModule,
    NbListModule,
    NbButtonModule
} from '@nebular/theme';

@NgModule({
    imports: [
        NbCardModule,
        NbListModule,
        NbButtonModule,
        CommonModule
    ],
    declarations: [
        AgregarComponent
    ]
})
export class AgregarModule { }