import { CARDS_KEY, ICard } from './../actions/admin.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCardFeature = createFeatureSelector<ICard[]>(CARDS_KEY);
export const selectCard = createSelector(selectCardFeature, (state) => state);
