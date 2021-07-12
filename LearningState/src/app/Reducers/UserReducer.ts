import {createReducer, on} from '@ngrx/store';
import {addUser} from '../Actions/userAction';
import { IUserProps } from '../models/userModel';

const INITIAL_STATE: IUserProps[] = [];

export const userReducer = createReducer(
  INITIAL_STATE,
  on(addUser, (state, props) => ([...state,{...props}]))
)

