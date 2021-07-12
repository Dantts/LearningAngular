import { Component, OnInit, Input } from '@angular/core';
import { onlyHero } from '../heroes/heroes.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() hero?: onlyHero;

}
