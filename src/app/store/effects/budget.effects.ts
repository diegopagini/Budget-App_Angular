import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { enterBudget } from '../actions/budget.actions';
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
