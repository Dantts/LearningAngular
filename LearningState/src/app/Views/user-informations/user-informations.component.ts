import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserProps } from 'src/app/models/userModel';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.scss']
})
export class UserInformationsComponent implements OnInit {

  constructor() {}

  user: IUserProps;

  ngOnInit(): void {
    this.user = history.state;
  }

  goToBack = () => {
    history.back();
  }

}
