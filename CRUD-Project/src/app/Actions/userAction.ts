import {createAction, props} from '@ngrx/store';
import {IUserProps} from '../models/userModel';

export const addUser = createAction(
  'addUser',
  props<any>()
)

export const getUsers = createAction('getUsers')

export const removeUser = createAction(
  'removeUser',
  props<any>()
);
