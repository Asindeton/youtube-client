import { ILoginState } from './../actions/login.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectLoginFeature = createFeatureSelector<ILoginState>('login');
export const selectLogin = createSelector(selectLoginFeature, (state) => state.isLogin);
