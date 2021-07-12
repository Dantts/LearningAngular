import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserProps } from 'src/app/models/userModel';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  @Input() user: IUserProps;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goUserInformation = () => {
    this.route.navigateByUrl(`user/${this.user.id}`);
  }

}
