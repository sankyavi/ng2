//import the Angular 2 core so that our component code can have access to the @NgModule decorator
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  //We're passing metadata to the NgModule decorator function:
  imports:      [ BrowserModule,FormsModule ],  //imports - the other modules that export material we need in this module.
  declarations: [ AppComponent ],   //components and directives that belong to this module.
  bootstrap:    [ AppComponent ]    // identifies the root component that Angular should bootstrap when it starts the application
})
export class AppModule { }

// ANGULAR concepto

//Every app requires at least one module, the root module, that we call AppModule by convention