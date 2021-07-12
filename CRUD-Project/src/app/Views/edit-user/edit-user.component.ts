import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserProps } from 'src/app/models/userModel';
import { BackendServicesService } from 'src/app/Services/backend-services.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(
    private backService: BackendServicesService,
    private acRoute: ActivatedRoute,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }
// Page State for edit user

  pageState = {
    pageOne: true,
    pageTwo: false
  }

  userState: IUserProps;

 // Functions for setState edit users
  setPageState = (pageOne: boolean, pageTwo: boolean) => {
    this.pageState.pageOne = pageOne;
    this.pageState.pageTwo = pageTwo;
  }

  getEmployee = () => {
    this.backService.getOneEmployee(this.acRoute.snapshot.params['id']).subscribe(data => this.userState = data);
  }

  editUserInformation = () => {
    this.backService.editEmployee(this.userState, this.acRoute.snapshot.params['id']);
    this.route.navigateByUrl('/');
  }

}
