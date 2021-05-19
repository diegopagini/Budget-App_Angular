import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  public budget$: Observable<any>;

  constructor(private store: Store<{ budget: any }>, private router: Router) {
    this.budget$ = this.store.select('budget');
  }

  ngOnInit(): void {
    this.budget$.subscribe((budget$) => {
      if (budget$.budget === 0) {
        this.router.navigate(['/enterExpense']);
      }
    });
  }
}
