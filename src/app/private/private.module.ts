import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { BaseComponent } from './components/layout/base/base.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/layout/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    BaseComponent,
    NavBarComponent,
    SideBarComponent,
    DashboardComponent,
    FooterComponent,
  ],
  imports: [CommonModule, PrivateRoutingModule],
  providers: [],
})
export class PrivateModule {}
