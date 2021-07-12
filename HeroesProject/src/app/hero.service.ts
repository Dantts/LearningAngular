import { Injectable } from '@angular/core';
import {heroes, onlyHero} from './heroes/heroes.model';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
  ) { }

  getHeroes(): Observable<onlyHero[]> {
    const herois = of(heroes);
    this.messageService.addMessage('HeroServices: Fetched heroes.')
    return herois;
  }
}
