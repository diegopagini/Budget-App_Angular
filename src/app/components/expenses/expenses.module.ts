import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './expenses.component';
import { ExpenseListModule } from '../expense-list/expense-list.module';
import { EnterExpenseModule } from '../enter-expense/enter-expense.module';

@NgModule({
  declarations: [ExpensesComponent],
  imports: [CommonModule, ExpenseListModule, EnterExpenseModule],
  exports: [ExpensesComponent],
})
export class ExpensesModule {}
