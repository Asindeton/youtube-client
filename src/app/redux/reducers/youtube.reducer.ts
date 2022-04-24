import { initialYoutubeState, YoutubeActions, TYoutubeState } from './../actions/youtube.actions';
import { createReducer, on } from '@ngrx/store';

export const youtubeReducer = createReducer(
  initialYoutubeState,
  on(YoutubeActions.get, (state, { newResponse }): TYoutubeState => newResponse),
);
