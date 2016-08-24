//import the Angular 2 core so that our component code can have access to the @Component decorator
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


// decorater that lets angular know and register the Component
@Component({
  selector: 'my-app', // The selector specifies a simple CSS selector for an HTML element that represents the component.
  
  //The template specifies the component's companion template, 
  //written in an enhanced form of HTML that tells Angular how to render this component's view.
  template: `
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
  <li *ngFor="let hero of heroes"
    [class.selected]="hero === selectedHero"
    (click)="onselect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
  </ul>
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  providers: [HeroService]
})


//We export AppComponent so that we can import it elsewhere in our application
export class AppComponent implements OnInit {
  title : string =  "tour of heroes";
  heroes : Hero[];
  selectedHero : Hero;

  constructor(private heroService: HeroService) { }
  
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onselect (hero:Hero): void {
    this.selectedHero = hero;
  }
   
 }  // AppComponent is the root of the application



// ANGULAR concepto

//A component class that controls the appearance and behavior of a view through its template
// Components are the basic building blocks of Angular applications. 
//A component controls a portion of the screen — a view — through its associated template.

//@Component is a decorator that allows us to associate metadata with the component class. 
//The metadata tells Angular how to create and use this component.
//This particular metadata object has two fields, a selector and a template 
//refer above