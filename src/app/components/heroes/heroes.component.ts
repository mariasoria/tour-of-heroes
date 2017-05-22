import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroService} from '../../core/services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroService],
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  // saves in heroService whatever is coming from HeroService
  constructor(private heroService: HeroService) { }

  // gets the list of heroes provided from mock-heroes through hero.service
  getHeroes(): void {
    // synchronous signature
    // this.heroes = this.heroService.getHeroes();
    // when the info comes from a remote server, do it asyncronous
    // To coordinate the view with the response, you can use Promises
    this.heroService.getHeroes()
    // this.heroService.getHeroesSlowly()
    .then(heroes => {
      this.heroes = heroes;
    });
  }

  // calls getHeroes in this file at the begining
  // because it is not recommended to do it in the constructor
  // constructor should not contain complex logic
  // it is just for simple initializations, like wiring constructor parameters to properties. 
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

