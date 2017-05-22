import { Injectable } from '@angular/core';

import { Hero } from '../../model/hero';
import { HEROES } from '../../mock-heroes';


@Injectable()
export class HeroService {
  
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // we want to simulate that our server has some delay
  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(this.getHeroes()), 2000);
  //   });
  // }
  
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}