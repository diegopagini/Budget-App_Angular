import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

const routes: Routes = [
  { path: '', redirectTo: '/enterExpense', pathMatch: 'full' },
  { path: 'enterExpense', component: EnterBudgetComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: '**', redirectTo: '/enterExpense', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
