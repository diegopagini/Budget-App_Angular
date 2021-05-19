import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { enterBudget, enterExpense } from '../actions/budget.actions';
import Swal from 'sweetalert2';

@Injectable()
export class budgetEffects {
  enterBugdet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(enterBudget),
        tap(() => {
          Swal.fire('Budget entered');
        })
      ),

    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}

@Injectable()
export class enterExpenseEffect {
  enterExpense$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(enterExpense),
        tap(() => {
          Swal.fire('Aggregate expense');
        })
      ),

    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
