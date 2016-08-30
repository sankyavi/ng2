import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './heroes';

@Injectable()
export class HeroService {
  
  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  /* 
  getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES);
  } 
  */


  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise<Hero[]>(resolve =>
    setTimeout(() => resolve(HEROES), 2000) // 2 seconds
  );
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(
      heroes => heroes.find(hero => hero.id === id)
    );
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

}
