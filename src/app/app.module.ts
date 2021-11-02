import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule } from 'igniteui-angular';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

import { AddStatusComponent } from './components/add-status/add-status.component';
import { StatusDetailsComponent } from './components/status-details/status-details.component';
import { StatusesListComponent } from './components/statuses-list/statuses-list.component';
import { AddAssignmentComponent } from './components/add-assignment/add-assignment.component';
import { AssignmentDetailsComponent } from './components/assignment-details/assignment-details.component';
import { AssignmentsListComponent } from './components/assignments-list/assignments-list.component';
import { AddOpeningComponent } from './components/add-opening/add-opening.component';
import { OpeningDetailsComponent } from './components/opening-details/opening-details.component';
import { OpeningsListComponent } from './components/openings-list/openings-list.component';
import { AddPracticeComponent } from './components/add-practice/add-practice.component';
import { PracticeDetailsComponent } from './components/practice-details/practice-details.component';
import { PracticesListComponent } from './components/practices-list/practices-list.component';
import { AddRegionComponent } from './components/add-region/add-region.component';
import { RegionDetailsComponent } from './components/region-details/region-details.component';
import { RegionsListComponent } from './components/regions-list/regions-list.component';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { RoleDetailsComponent } from './components/role-details/role-details.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { ClientAssignmentsComponent } from './components/client-assignments/client-assignments.component';
import { ClientOpeningsComponent } from './components/client-openings/client-openings.component';
import { RoleUsersComponent } from './role-users/role-users.component';
import { PracticeAssignmentsComponent } from './practice-assignments/practice-assignments.component';
import { PracticeOpeningsComponent } from './practice-openings/practice-openings.component';
import { PracticeRolesComponent } from './practice-roles/practice-roles.component';
import { PracticeUsersComponent } from './practice-users/practice-users.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    AddStatusComponent,
    StatusDetailsComponent,
    StatusesListComponent,
    AddAssignmentComponent,
    AssignmentDetailsComponent,
    AssignmentsListComponent,
    AddOpeningComponent,
    OpeningDetailsComponent,
    OpeningsListComponent,
    AddPracticeComponent,
    PracticeDetailsComponent,
    PracticesListComponent,
    AddRegionComponent,
    RegionDetailsComponent,
    RegionsListComponent,
    AddRoleComponent,
    RoleDetailsComponent,
    RolesListComponent,
    AddUserComponent,
    UserDetailsComponent,
    UsersListComponent,
    DashboardComponent,
    MessagesComponent,
    ClientAssignmentsComponent,
    ClientOpeningsComponent,
    RoleUsersComponent,
    PracticeAssignmentsComponent,
    PracticeOpeningsComponent,
    PracticeRolesComponent,
    PracticeUsersComponent,
    AddClientComponent,
    ClientDetailsComponent,
    ClientsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IgxDatePickerModule,
    BrowserAnimationsModule,
    HammerModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
