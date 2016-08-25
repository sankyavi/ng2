//import the Angular 2 core so that our component code can have access to the @Component decorator
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';


// decorater that lets angular know and register the Component
@Component({
  selector: 'my-heroes', // The selector specifies a simple CSS selector for an HTML element that represents the component.
  
  //The template specifies the component's companion template, 
  //written in an enhanced form of HTML that tells Angular how to render this component's view.
  templateUrl: 'app/heroes.component.html'
  
})


//We export AppComponent so that we can import it elsewhere in our application
export class HeroesComponent implements OnInit {
  
  heroes : Hero[];
  selectedHero : Hero;

  constructor(
    private heroService: HeroService,
    private router : Router
  ) { }
  
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onselect (hero:Hero): void {
    this.selectedHero = hero;
  }
   
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
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