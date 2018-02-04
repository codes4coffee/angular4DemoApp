import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';

const appRoutes:Routes = [
  {path:'', component:UserComponent},
  {path:'about', component:AboutComponent}
];

//Everything must be imported into this file and added to the NgModule directive below
@NgModule({
  declarations: [ //Components go here
    AppComponent, UserComponent, AboutComponent
  ],
  imports: [ //Modules go here
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService], //Servecies go here
  bootstrap: [AppComponent] //The main app component goes here because it is the root of the project
})
export class AppModule { }
