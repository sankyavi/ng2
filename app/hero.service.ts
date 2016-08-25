import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './heroes';
@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

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

}
