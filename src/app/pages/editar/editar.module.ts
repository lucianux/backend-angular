import { NgModule } from '@angular/core';
import { EditarComponent } from './editar.component';
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
        EditarComponent
    ]
})
export class EditarModule { }