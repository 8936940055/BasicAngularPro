import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import{Hero}from '../hero';
import { HeroService } from '../hero.service';

import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit 
{
  // @Input()
  hero : Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {} 

  ngOnInit(): void {
   this.getHero();
  }

  
  getHero(): void {
    const ID = +this.route.snapshot.paramMap.get(id);
    this.heroService.getHero(ID)
      .subscribe(hero => this.hero = hero);
  }
  
}