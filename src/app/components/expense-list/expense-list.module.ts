import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseListComponent } from './expense-list.component';

@NgModule({
  declarations: [ExpenseListComponent],
  imports: [CommonModule],
  exports: [ExpenseListComponent],
})
export class ExpenseListModule {}
