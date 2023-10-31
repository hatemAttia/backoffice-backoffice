import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { GuardGuard } from '../guard/guard.guard';
import { EditAddPapersComponent } from './components/papers/edit-add-papers/edit-add-papers.component';
import { DetailConferenceComponent } from './components/conferences/detail-conference/detail-conference.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [GuardGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [GuardGuard],
        loadChildren: () =>
          import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: '',
        canActivate: [GuardGuard],
        loadChildren: () =>
          import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'conferences',
        canActivate: [GuardGuard],
        loadChildren: () =>
          import('./components/conferences/conferences.module').then((m) => m.ConferencesModule),
      },
      {
        path: 'conferences/details/papers/:id',
        canActivate: [GuardGuard],
        loadChildren: () =>
          import('./components/conferences/conferences.module').then((m) => m.ConferencesModule),
          component: EditAddPapersComponent,
      },
      {
        path: 'conferences/details/:id',
        canActivate: [GuardGuard],
        loadChildren: () =>
          import('./components/conferences/conferences.module').then((m) => m.ConferencesModule),
          component: DetailConferenceComponent,
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
