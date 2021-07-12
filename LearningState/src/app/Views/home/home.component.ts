import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUserProps } from 'src/app/models/userModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.getStateInformations();
  }



  //Variables for state page.
  showAddUserPage: boolean = false;

  userState: IUserProps[];

  //Functions for change state page.
  setViewAddUserPage = (turnView: boolean): void => {
    this.showAddUserPage = turnView;
  }

  getStateInformations = (): void => {
    this.store.pipe(select('userReducer')).subscribe(data => this.userState = data);
  }


}
