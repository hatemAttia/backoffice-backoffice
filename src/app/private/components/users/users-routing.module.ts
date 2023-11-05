import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUsersComponent } from './all-users/all-users.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';

const routes: Routes = [{
  path:'accounts',
  component: AdminUsersComponent,
},{
  path:'add-user',
  component: AddEditUserComponent,
},
{
  path:'details/:id',
  component: AddEditUserComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
