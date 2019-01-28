import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TasklistItemComponent } from './tasklist-item/tasklist-item.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { TaskeditorComponent } from './taskeditor/taskeditor.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectlistItemComponent } from './projectlist-item/projectlist-item.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { ProjecteditorComponent } from './projecteditor/projecteditor.component';
import { SettingsComponent } from './settings/settings.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TasklistComponent,
    TasklistItemComponent,
    TaskdetailComponent,
    TaskeditorComponent,
    ProjectlistComponent,
    ProjectlistItemComponent,
    ProjectdetailComponent,
    ProjecteditorComponent,
    SettingsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
