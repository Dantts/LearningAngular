import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './Views/home/home.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';

import {userReducer} from './Reducers/UserReducer';

import { CreateUserComponent } from './Components/create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { CardUserComponent } from './Components/card-user/card-user.component';
import { UserInformationsComponent } from './Views/user-informations/user-informations.component';
import { EditUserComponent } from './Views/edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    CreateUserComponent,
    CardUserComponent,
    UserInformationsComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({userReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
