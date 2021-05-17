import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  public budget: number;
  public remaining: number;

  constructor() {}
}
