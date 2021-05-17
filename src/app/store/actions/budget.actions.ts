import { createAction, props } from '@ngrx/store';

export const enterBudget = createAction(
  '[Budget] Enter Budget',
  props<{ amount: number; rest: number }>()
);
