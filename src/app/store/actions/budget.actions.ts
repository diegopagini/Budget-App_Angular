import { createAction, props } from '@ngrx/store';

export const enterBudget = createAction(
  '[Budget] Enter Budget',
  props<{ amount: number; rest: number }>()
);

export const enterExpense = createAction(
  '[Budget] Expense entered',
  props<{ expense: number; rest: number }>()
);
