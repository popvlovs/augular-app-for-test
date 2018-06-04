import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

// Decorator Func ? just like Annotation in Java?
@Component({
  selector: 'app-heros', // selector id just for angular?
  templateUrl: './heros.component.html', // template html
  styleUrls: ['./heros.component.css'] // css
})
export class HerosComponent implements OnInit {

  heroes: Hero[]

  selectedHero: Hero

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  add(name: string): void {
    name = name.trim()
    if (!name) {
      return
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => this.heroes.push(hero))
  }

  constructor(private heroService: HeroService) {  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes
      this.selectedHero = this.heroes[0]
    })
  }

}
