import { createReducer, on } from '@ngrx/store';
import { ILoginState, initialLoginState, LoginAction } from '../actions/login.actions';

export const loginReducer = createReducer(
  initialLoginState,
  on(LoginAction.login, (state): ILoginState => ({ ...state, isLogin: true })),
  on(LoginAction.logout, (state): ILoginState => ({ ...state, isLogin: false })),
);
