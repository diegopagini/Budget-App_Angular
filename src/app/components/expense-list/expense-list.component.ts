import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent implements OnInit {
  public budget$: Observable<any>;
  public budget: number;
  public remaining: number;

  constructor(private store: Store<{ budget: any; expenses: any }>) {
    this.budget$ = this.store.select('budget');
  }

  ngOnInit(): void {}
}
