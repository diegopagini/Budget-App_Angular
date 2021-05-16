import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesModule } from './expenses/expenses.module';
import { EnterBudgetModule } from './enter-budget/enter-budget.module';
import { EnterExpenseModule } from './enter-expense/enter-expense.module';
import { ExpenseListModule } from './expense-list/expense-list.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExpensesModule,
    EnterBudgetModule,
    EnterExpenseModule,
    ExpenseListModule,
  ],
  exports: [
    ExpensesModule,
    EnterBudgetModule,
    EnterExpenseModule,
    ExpenseListModule,
  ],
})
export class ComponentsModule {}
