import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserProps } from 'src/app/models/userModel';
import { BackendServicesService } from 'src/app/Services/backend-services.service';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.scss']
})
export class UserInformationsComponent implements OnInit {

  constructor(
    private backService: BackendServicesService,
    private acRoute: ActivatedRoute,
    private route: Router,
  ) {}

  user: IUserProps;

  ngOnInit(): void {
    this.getEmployee();
  }

  goToBack = () => {
    history.back();
  }

  goToEdit = () => {
    this.route.navigateByUrl(`/edit/${this.acRoute.snapshot.params['id']}`);
  }

  getEmployee = () => {
    this.backService.getOneEmployee(this.acRoute.snapshot.params['id']).subscribe(data => this.user = data);
  }

  deleteEmployee = () => {
    this.backService.deleteEmployee(this.user.id);
    this.goToBack();
  }

}
