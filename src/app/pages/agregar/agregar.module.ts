import { NgModule } from '@angular/core';
import { AgregarComponent } from './agregar.component';
import { CommonModule } from '@angular/common';
import {
    NbCardModule,
    NbListModule,
    NbButtonModule
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        NbCardModule,
        NbListModule,
        NbButtonModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        AgregarComponent
    ]
})
export class AgregarModule { }