import { createAction, props } from '@ngrx/store';

export const CARDS_KEY = 'cards';

export const AdminAction = {
  addCard: createAction('[ADMIN] Add card', props<{ card: ICard }>()),
};

export const initialCardState: TCardsState = [];

export type TCardsState = ICard[];

export interface ICard {
  title: string;
  description: string;
  imageCoverLink: string;
  videoLink: string;
  created: number;
}
