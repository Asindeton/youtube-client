import { ILoginState, LOGIN_KEY } from './../actions/login.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectLoginFeature = createFeatureSelector<ILoginState>(LOGIN_KEY);
export const selectLogin = createSelector(selectLoginFeature, (state) => state.isLogin);
