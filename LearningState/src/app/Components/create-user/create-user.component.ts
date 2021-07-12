import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addUser } from 'src/app/Actions/userAction';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @Input() setViewAddUserPage: (turnView: boolean) => void;
  @Input() getStateInformations: () => void;

  constructor(
    private store: Store<any>,
    private route: Router
    ) {
  }

  ngOnInit(): void {
  }

  // Page State for user register
  pageState = {
    pageOne: true,
    pageTwo: false
  }

  userState = {
    name: '',
    lastName: '',
    isMan: false,
    imageProfile: 'https://image.flaticon.com/icons/png/512/236/236831.png',
    numberPhone: 0,
    email: '',
    address: '',
    addressNumber: 0,
    workPlace: '',
    salary: 0,
    isWork: false
  }
  // Functions for setState users register

  setPageState = (pageOne: boolean, pageTwo: boolean) => {
    this.pageState.pageOne = pageOne;
    this.pageState.pageTwo = pageTwo;
  }

  addUser = () => {
    this.store.dispatch(addUser(this.userState));
    this.getStateInformations();
    this.setViewAddUserPage(false);
  }
}
