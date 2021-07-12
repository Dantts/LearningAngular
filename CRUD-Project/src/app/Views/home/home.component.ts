import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addUser } from 'src/app/Actions/userAction';
import { IUserProps } from 'src/app/models/userModel';
import { BackendServicesService } from 'src/app/Services/backend-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private store: Store<any>,
    private backServices: BackendServicesService
    ) { }

  ngOnInit(): void {
    this.getEmployees();
  }



  //Variables for state page.
  showAddUserPage: boolean = false;

  userState: IUserProps[] = [];

  //Functions for change state page.
  setViewAddUserPage = (turnView: boolean): void => {
    this.showAddUserPage = turnView;
  }


  getEmployees = () => {
    this.backServices.getAllEmployee().subscribe(data => this.store.dispatch(addUser(data)));
    this.store.pipe(select('userReducer')).subscribe(data => {
      var list: IUserProps[] = Object.values(data);
      list.pop();
      this.userState = list;
    })
  }
}
