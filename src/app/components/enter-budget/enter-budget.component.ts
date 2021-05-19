import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { enterBudget } from '../../store/actions/budget.actions';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.scss'],
})
export class EnterBudgetComponent implements OnInit {
  public amountForm: FormGroup;

  constructor(
    private router: Router,
    private store: Store,
    private fb: FormBuilder
  ) {
    this.amountForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {}

  add(): void {
    if (this.amountForm.get('amount').value !== 0) {
      this.store.dispatch(
        enterBudget({
          amount: this.amountForm.get('amount').value,
          rest: this.amountForm.get('amount').value,
        })
      );
      this.router.navigate(['/expenses']);
    } else {
      this.amountForm.markAllAsTouched();
    }
  }
}
