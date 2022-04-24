import { TCardsState, CARDS_KEY } from './../actions/admin.action';
import { loginReducer } from './login.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { ILoginState, LOGIN_KEY } from '../actions/login.actions';
import { adminReducer } from './admin.reducer';

export interface State {
  [LOGIN_KEY]: ILoginState;
  [CARDS_KEY]: TCardsState;
}

export const reducers: ActionReducerMap<State> = {
  [LOGIN_KEY]: loginReducer,
  [CARDS_KEY]: adminReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
