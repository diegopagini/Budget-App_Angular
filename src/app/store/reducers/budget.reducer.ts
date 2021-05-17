import { createReducer, on } from '@ngrx/store';
import { enterBudget } from '../actions/budget.actions';

const initialState = {
  budget: 0,
  remaining: 0,
};

const _budgetReducer = createReducer(
  initialState,
  on(enterBudget, (state, { amount, rest }) => ({
    ...state,
    budget: amount,
    remaining: rest,
  }))
);

export function budgetReducer(state, action) {
  return _budgetReducer(state, action);
}
