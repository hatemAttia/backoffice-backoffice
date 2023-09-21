import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllConferencesComponent } from './all-conferences/all-conferences.component';
import { DetailConferenceComponent } from './detail-conference/detail-conference.component';
import { AddConferenceComponent } from './add-conference/add-conference.component';

const routes: Routes = [{
  path:'allConferences',
  component: AllConferencesComponent
},
{
  path: 'details/:id',
  //path: 'details/:id/:name',
  component: DetailConferenceComponent
} ,
{
  path: 'addConference',
  component: AddConferenceComponent
} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConferencesRoutingModule { }
