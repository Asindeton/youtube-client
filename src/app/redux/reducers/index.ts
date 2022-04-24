import { loginReducer } from './login.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { ILoginState } from '../actions/login.actions';

export interface State {
  login: ILoginState;
}

export const reducers: ActionReducerMap<State> = {
  login: loginReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
