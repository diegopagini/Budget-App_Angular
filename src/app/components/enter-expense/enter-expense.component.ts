import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { enterExpense } from '../../store/actions/budget.actions';

@Component({
  selector: 'app-enter-expense',
  templateUrl: './enter-expense.component.html',
  styleUrls: ['./enter-expense.component.scss'],
})
export class EnterExpenseComponent implements OnInit {
  public expenseForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.expenseForm = fb.group({
      expense: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  enterExpense(): void {
    if (this.expenseForm.valid) {
      this.store.dispatch(
        enterExpense({
          expense: this.expenseForm.value,
          rest: this.expenseForm.get('amount').value,
        })
      );
      this.expenseForm.reset();
    } else {
      this.expenseForm.markAllAsTouched();
    }
  }

  get expenseInvalid(): boolean {
    return (
      this.expenseForm.get('expense').invalid &&
      this.expenseForm.get('expense').touched
    );
  }

  get amountInvalid(): boolean {
    return (
      this.expenseForm.get('amount').invalid &&
      this.expenseForm.get('amount').touched
    );
  }
}
