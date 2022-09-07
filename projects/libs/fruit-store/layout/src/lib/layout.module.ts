import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardModule } from '@shared/product-card';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule, ProductCardModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
