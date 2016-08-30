//import the Angular 2 core so that our component code can have access to the @NgModule decorator
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api (developement only {mock DATA})
import { XHRBackend } from '@angular/http';

import { InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService }  from './hero.service';

@NgModule({
  //We're passing metadata to the NgModule decorator function:
  imports:      [ BrowserModule,FormsModule, routing, HttpModule,
                InMemoryWebApiModule.forRoot(InMemoryDataService)
                ],  //imports - the other modules that export material we need in this module.
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent ],   //components and directives that belong to this module.
  providers :   [ HeroService ],
  bootstrap:    [ AppComponent ]    // identifies the root component that Angular should bootstrap when it starts the application
})
export class AppModule { }

// ANGULAR concepto

//Every app requires at least one module, the root module, that we call AppModule by convention