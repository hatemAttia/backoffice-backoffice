import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferencesRoutingModule } from './conferences-routing.module';
import { ToolsComponent } from './tools/tools.component';
import { DetailConferenceComponent } from './detail-conference/detail-conference.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AllPapersComponent } from '../papers/all-papers/all-papers.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditAddConferenceComponent } from './edit-add-conference/edit-add-conference.component';

@NgModule({
  declarations: [
    ToolsComponent,
    DetailConferenceComponent,
    AllPapersComponent,
    EditAddConferenceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule, 
    MatMenuModule,
    MatSortModule,
    MatDatepickerModule, MatNativeDateModule,
    ConferencesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    
  ] 
})
export class ConferencesModule { }
