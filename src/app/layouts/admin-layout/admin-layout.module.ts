import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PieTableComponent } from 'app/pages/dashboard/pie-table/pie-table.component';
import { BarChartComponent } from 'app/pages/dashboard/bar-chart/bar-chart.component';

import { UsersAPPComponent } from 'app/pages/users-app/users-app.component';
import { LicenseComponent } from 'app/pages/license/license.component';
import { MobileModelsConfigurationComponent } from 'app/pages/mobile-models-configuration/mobile-models-configuration.component';
import { MobModConfDetailComponent } from 'app/pages/mobile-models-configuration/mob-mod-conf-detail/mob-mod-conf-detail.component';
import { AlarmsComponent } from 'app/pages/dashboard/alarms/alarms.component';
import { UsersWebComponent } from 'app/pages/users-web/users-web.component';
import { AddUserComponent } from 'app/pages/users-web/modals/add-user/add-user.component';
import { ResetPwdComponent } from 'app/pages/users-web/modals/reset-pwd/reset-pwd.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    MapsComponent,
    PieTableComponent,
    UsersAPPComponent,
    UsersWebComponent,
    MobileModelsConfigurationComponent,
    MobModConfDetailComponent,
    BarChartComponent,
    LicenseComponent,
    AlarmsComponent,
    AddUserComponent,
    ResetPwdComponent,
  ]
})

export class AdminLayoutModule {}
