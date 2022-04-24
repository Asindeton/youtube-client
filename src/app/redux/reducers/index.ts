import { loginReducer } from './login.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { ILoginState, LOGIN_KEY } from '../actions/login.actions';

export interface State {
  [LOGIN_KEY]: ILoginState;
}

export const reducers: ActionReducerMap<State> = {
  [LOGIN_KEY]: loginReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
