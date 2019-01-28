import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { TaskeditorComponent } from './taskeditor/taskeditor.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { ProjecteditorComponent } from './projecteditor/projecteditor.component';
import { SettingsComponent } from './settings/settings.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
	{ path: 'tasks', component:TasklistComponent },
	{ path: 'task/:id', component: TaskdetailComponent },
	{ path: 'tasked/:id', component: TaskeditorComponent },
	{ path: 'projects', component:ProjectlistComponent },
	{ path: 'project/:id', component:ProjectdetailComponent },
	{ path: 'projected/:id', component:ProjecteditorComponent },
	{ path: 'settings', component:SettingsComponent },

	{ path: '', redirectTo: '/tasks', pathMatch: 'full' },
	{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
