import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './expenses.component';

@NgModule({
  declarations: [ExpensesComponent],
  imports: [CommonModule],
  exports: [ExpensesComponent],
})
export class ExpensesModule {}
