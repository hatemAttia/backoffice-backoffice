import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllConferencesComponent } from './all-conferences/all-conferences.component';
import { DetailConferenceComponent } from './detail-conference/detail-conference.component';

const routes: Routes = [{
  path:'',
  component: AllConferencesComponent
},
{
  path: 'details',
  component: DetailConferenceComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConferencesRoutingModule { }
