import { TCardsState } from './../actions/admin.action';
import { createReducer, on } from '@ngrx/store';
import { AdminAction, initialCardState } from '../actions/admin.action';

export const adminReducer = createReducer(
  initialCardState,
  on(
    AdminAction.addCard,
    (state, { card }): TCardsState => [...state, { ...card, created: new Date().getTime() }],
  ),
);
