import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignmentsListComponent } from './components/assignments-list/assignments-list.component';
import { AssignmentDetailsComponent } from './components/assignment-details/assignment-details.component';
import { AddAssignmentComponent } from './components/add-assignment/add-assignment.component';

import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';

import { OpeningsListComponent } from './components/openings-list/openings-list.component';
import { OpeningDetailsComponent } from './components/opening-details/opening-details.component';
import { AddOpeningComponent } from './components/add-opening/add-opening.component';

import { PracticesListComponent } from './components/practices-list/practices-list.component';
import { PracticeDetailsComponent } from './components/practice-details/practice-details.component';
import { AddPracticeComponent } from './components/add-practice/add-practice.component';

import { RegionsListComponent } from './components/regions-list/regions-list.component';
import { RegionDetailsComponent } from './components/region-details/region-details.component';
import { AddRegionComponent } from './components/add-region/add-region.component';

import { RolesListComponent } from './components/roles-list/roles-list.component';
import { RoleDetailsComponent } from './components/role-details/role-details.component';
import { AddRoleComponent } from './components/add-role/add-role.component';

import { StatusesListComponent } from './components/statuses-list/statuses-list.component';
import { StatusDetailsComponent } from './components/status-details/status-details.component';
import { AddStatusComponent } from './components/add-status/add-status.component';

import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'assignments', component: AssignmentsListComponent },
  { path: 'assignments/:id', component: AssignmentDetailsComponent },
  { path: 'assignment/add', component: AddAssignmentComponent },
  { path: 'clients', component: ClientsListComponent },
  { path: 'clients/:id', component: ClientDetailsComponent },
  { path: 'client/add', component: AddClientComponent },
  { path: 'openings', component: OpeningsListComponent },
  { path: 'openings/:id', component: OpeningDetailsComponent },
  { path: 'opening/add', component: AddOpeningComponent },
  { path: 'practices', component: PracticesListComponent },
  { path: 'practices/:id', component: PracticeDetailsComponent },
  { path: 'practice/add', component: AddPracticeComponent },
  { path: 'regions', component: RegionsListComponent },
  { path: 'regions/:id', component: RegionDetailsComponent },
  { path: 'region/add', component: AddRegionComponent },
  { path: 'roles', component: RolesListComponent },
  { path: 'roles/:id', component: RoleDetailsComponent },
  { path: 'role/add', component: AddRoleComponent },
  { path: 'statuses', component: StatusesListComponent },
  { path: 'statuses/:id', component: StatusDetailsComponent },
  { path: 'status/add', component: AddStatusComponent },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'tutorial/add', component: AddTutorialComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'user/add', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
