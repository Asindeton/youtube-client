import { ISearchResponse } from './../../youtube/components/search/models/search-response.model';
import { createAction, props } from '@ngrx/store';

export const YOUTUBE_KEY = 'youtube';

export const YoutubeActions = {
  get: createAction('[YOUTUBE] get cart', props<{ newResponse: ISearchResponse }>()),
};

export const initialYoutubeState: TYoutubeState = null;

export type TYoutubeState = ISearchResponse | null;
