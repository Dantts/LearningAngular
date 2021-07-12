import { Component, OnInit } from '@angular/core';
import { onlyHero } from './heroes.model';
import {HeroService} from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroServices: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: onlyHero[] = [];

  seletedHero?: onlyHero;

  getHeroes(): void {
    this.heroServices.getHeroes().subscribe(data => this.heroes = data);
  }

  onSelectHero(hero: onlyHero): void{
    this.seletedHero = hero;
    this.messageService.addMessage(`HeroesComponent: Selected hero id=${hero.id}`)
    console.log(this.seletedHero)
  }

}
