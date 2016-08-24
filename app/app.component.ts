//import the Angular 2 core so that our component code can have access to the @Component decorator
import { Component } from '@angular/core';

export class Hero {
  id : number;
  name : string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


// decorater that lets angular know and register the Component
@Component({
  selector: 'my-app', // The selector specifies a simple CSS selector for an HTML element that represents the component.

  //The template specifies the component's companion template, 
  //written in an enhanced form of HTML that tells Angular how to render this component's view.
  template: `
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
  <li *ngFor="let hero of heroes">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
  </ul>
  `
})
//We export AppComponent so that we can import it elsewhere in our application
export class AppComponent {
  title : string =  "tour of heroes";
  heroes =  HEROES;
 }   // AppComponent is the root of the application



// ANGULAR concepto

//A component class that controls the appearance and behavior of a view through its template
// Components are the basic building blocks of Angular applications. 
//A component controls a portion of the screen — a view — through its associated template.

//@Component is a decorator that allows us to associate metadata with the component class. 
//The metadata tells Angular how to create and use this component.
//This particular metadata object has two fields, a selector and a template 
//refer above