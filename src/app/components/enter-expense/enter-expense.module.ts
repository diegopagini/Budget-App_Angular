import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterExpenseComponent } from './enter-expense.component';

@NgModule({
  declarations: [EnterExpenseComponent],
  imports: [CommonModule],
  exports: [EnterExpenseComponent],
})
export class EnterExpenseModule {}
