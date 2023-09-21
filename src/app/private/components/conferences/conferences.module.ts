import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConferencesRoutingModule } from './conferences-routing.module';
import { ToolsComponent } from './tools/tools.component';
import { AddConferenceComponent } from './add-conference/add-conference.component';
import { DetailConferenceComponent } from './detail-conference/detail-conference.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    ToolsComponent,
    DetailConferenceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule, MatNativeDateModule,
    ConferencesRoutingModule
  ]
})
export class ConferencesModule { }
