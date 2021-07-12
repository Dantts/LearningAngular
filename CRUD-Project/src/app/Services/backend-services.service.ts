import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserProps } from '../models/userModel';
import { Store } from '@ngrx/store';
import { addUser, removeUser } from '../Actions/userAction';

@Injectable({
  providedIn: 'root'
})
export class BackendServicesService {

  constructor(
    private http: HttpClient,
    private store: Store<any>,
    ) { }

  private readonly baseURL = 'http://127.0.0.1:3001/api/employee';


  getAllEmployee = (): Observable<IUserProps[]> => {
    return this.http.get<IUserProps[]>(`${this.baseURL}/get`);
  }

  getOneEmployee = (id: number): Observable<IUserProps> => {
    return this.http.get<IUserProps>(`${this.baseURL}/getOne/${id}`)
  }

  postEmployee = (data: IUserProps) => {
    this.http.post(`${this.baseURL}/create`, data).subscribe(data =>
      data ? this.getAllEmployee().subscribe(users => this.store.dispatch(addUser(users))) : null
    );
  }

  deleteEmployee = (id?: number) => {
    this.http.delete(`${this.baseURL}/delete/${id}`).subscribe(r => r ? null : this.getAllEmployee().subscribe(users => this.store.dispatch(removeUser(users))));
  }

  editEmployee = (data: IUserProps, id: number) => {
    this.http.put<IUserProps>(`${this.baseURL}/update/${id}`, data).subscribe(data => this.getAllEmployee().subscribe(users => this.store.dispatch(removeUser(users))));
  }



}
