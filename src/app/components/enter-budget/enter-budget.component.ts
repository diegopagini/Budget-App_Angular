import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { enterBudget } from '../../store/actions/budget.actions';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.scss'],
})
export class EnterBudgetComponent implements OnInit {
  public amount: number;
  public incorrectAmount: boolean = false;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}

  add(): void {
    if (this.amount !== 0) {
      this.store.dispatch(
        enterBudget({ amount: this.amount, rest: this.amount })
      );
      this.incorrectAmount = false;
      this.router.navigate(['/expenses']);
    } else {
      this.incorrectAmount = true;
    }
  }
}
