import { createReducer, on } from '@ngrx/store';

import { increment, retrieveCounter } from './actions';

export const initialState: any = {
  counter: 0,
};

const _counterReducer = createReducer(
  initialState,
  on(retrieveCounter, (state, { counter }) => counter),
  on(increment, (state) => {
    console.log(state);
    const sum = state.counter + 1;
    return { counter: sum };
  })
  // on(decrement, (state) => state.counter - 1),
  // on(reset, (state) => 0)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
