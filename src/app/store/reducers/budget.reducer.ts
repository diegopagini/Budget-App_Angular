import { createReducer, on } from '@ngrx/store';
import { enterBudget, enterExpense } from '../actions/budget.actions';

const initialState = {
  budget: 0,
  remaining: 0,
  expenses: [],
};

const _budgetReducer = createReducer(
  initialState,
  on(enterBudget, (state, { amount, rest }) => ({
    ...state,
    budget: amount,
    remaining: rest,
  })),
  on(enterExpense, (state, { expense, rest }) => ({
    ...state,
    budget: state.budget - rest,
    expenses: [...state.expenses, expense],
  }))
);

export function budgetReducer(state, action) {
  return _budgetReducer(state, action);
}
