import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

import { StatusesListComponent } from './components/statuses-list/statuses-list.component';
import { StatusDetailsComponent } from './components/status-details/status-details.component';
import { AddStatusComponent } from './components/add-status/add-status.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'tutorials/add', component: AddTutorialComponent },
  { path: 'statuses', component: StatusesListComponent },
  { path: 'statuses/:id', component: StatusDetailsComponent },
  { path: 'statuses/add', component: AddStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
