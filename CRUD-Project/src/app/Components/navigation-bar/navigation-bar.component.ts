import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  //Inputs to navigation bar
  @Input() setViewAddUserPage: (turnView: boolean) => void; //Function for view add user page.

  constructor() { }

  ngOnInit(): void {
  }



}
