import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AddConferenceComponent } from './components/conferences/add-conference/add-conference.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'conferences',
        loadChildren: () =>
          import('./components/conferences/conferences.module').then((m) => m.ConferencesModule),
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
