import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArgonDashboardRoutingModule } from './argon-dashboard-routing.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ArgonDashboardComponent } from './argon-dashboard.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    ArgonDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    ArgonDashboardRoutingModule
  ]
})
export class ArgonDashboardModule { }
