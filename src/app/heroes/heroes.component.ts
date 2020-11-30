import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Hero } from '../hero';
import { HEROES } from '../Mock-Hero';
import{HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  //heroes = HEROES;
  heroes : Hero[];
  //  selectedHero : Hero; 
  

  constructor(private heroService : HeroService) { }

  ngOnInit() 
  {
   this.getHeroes();
  }

  getHeroes()
  {
    this.heroService.getHeroes()
    .subscribe(heroes => (this.heroes=heroes));
    
  }

  //   onSelect(hero: Hero): void {
  //     this.selectedHero = hero;
  //     // console.log(this.selectedHero);
  // }
}