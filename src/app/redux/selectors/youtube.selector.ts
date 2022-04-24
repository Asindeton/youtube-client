import { YOUTUBE_KEY, TYoutubeState } from './../actions/youtube.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectYoutubeFeature = createFeatureSelector<TYoutubeState>(YOUTUBE_KEY);
export const selectYoutube = createSelector(selectYoutubeFeature, (state) => state?.items);
