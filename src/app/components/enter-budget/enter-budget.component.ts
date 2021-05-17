import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BudgetService } from 'src/app/services/budget.service';
import { enterBudget } from '../../store/actions/budget.actions';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.scss'],
})
export class EnterBudgetComponent implements OnInit {
  public amount: number;
  public incorrectAmount: boolean = false;

  constructor(
    private budgetService: BudgetService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {}

  add(): void {
    if (this.amount > 0) {
      this.store.dispatch(
        enterBudget({ amount: this.amount, rest: this.amount })
      );
      this.incorrectAmount = false;
      this.budgetService.budget = this.amount;
      this.budgetService.remaining = this.amount;
      this.router.navigate(['/expenses']);
    } else {
      this.incorrectAmount = true;
    }
  }
}
