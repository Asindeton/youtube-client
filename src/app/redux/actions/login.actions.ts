import { createAction } from '@ngrx/store';

export const LOGIN_KEY = 'login';

export const LoginAction = {
  login: createAction('[LOGIN] login'),
  logout: createAction('[LOGIN] logout'),
};

export const initialLoginState: ILoginState = {
  isLogin: localStorage.getItem('youtube-client') !== null ? true : false,
};

export interface ILoginState {
  isLogin: boolean;
}
