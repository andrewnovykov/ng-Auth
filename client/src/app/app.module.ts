import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { ExampleService } from './example.service';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { TaskService } from './services/task.service';
import { TaskComponent } from './task/task.component';
import { LogoutComponent } from './logout/logout.component';


const appRoutes = [
  {
    path:'',
    component: LoginComponent
  },{
    path:'tasks',
    component: TaskComponent
  },{
    path:'logout',
    component: LogoutComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ UserService, TaskService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
