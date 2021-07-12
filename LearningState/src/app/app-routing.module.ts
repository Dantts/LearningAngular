import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { UserInformationsComponent } from './Views/user-informations/user-informations.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user', component: UserInformationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
