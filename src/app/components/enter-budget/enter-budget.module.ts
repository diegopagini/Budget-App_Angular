import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnterBudgetComponent } from './enter-budget.component';

@NgModule({
  declarations: [EnterBudgetComponent],
  imports: [CommonModule, FormsModule],
  exports: [EnterBudgetComponent],
})
export class EnterBudgetModule {}
