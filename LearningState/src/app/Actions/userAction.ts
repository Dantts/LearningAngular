import {createAction, props} from '@ngrx/store';
import {IUserProps} from '../models/userModel';

export const addUser = createAction(
  'addUser',
  props<IUserProps>()
)
