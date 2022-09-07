import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardModule } from '@shared/product-card';
import { ShellRoutingModule } from './shell-routing.module';

import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, ShellRoutingModule, ProductCardModule],
  exports: [ShellComponent],
})
export class ShellModule {}
