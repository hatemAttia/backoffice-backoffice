import { NgModule } from '@angular/core';
import { CommonModule,NgIf } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/layout/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AllConferencesComponent } from './components/conferences/all-conferences/all-conferences.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { EditAddPapersComponent } from './components/papers/edit-add-papers/edit-add-papers.component';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    DashboardComponent,
    FooterComponent,
    AllConferencesComponent,
    EditAddPapersComponent,
    LayoutComponent,
    EditAddPapersComponent
  ],
  imports: [
    CommonModule, 
    PrivateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule, 
    MatChipsModule,
    MatMenuModule,
    MatSortModule,
    RouterModule],
  providers: [],
})
export class PrivateModule {}
