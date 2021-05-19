import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EnterBudgetComponent } from './enter-budget.component';

@NgModule({
  declarations: [EnterBudgetComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [EnterBudgetComponent],
})
export class EnterBudgetModule {}
