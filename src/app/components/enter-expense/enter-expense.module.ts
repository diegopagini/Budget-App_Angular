import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterExpenseComponent } from './enter-expense.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EnterExpenseComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [EnterExpenseComponent],
})
export class EnterExpenseModule {}
