import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './Views/edit-user/edit-user.component';
import { HomeComponent } from './Views/home/home.component';
import { UserInformationsComponent } from './Views/user-informations/user-informations.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserInformationsComponent},
  {path: 'edit/:id', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
