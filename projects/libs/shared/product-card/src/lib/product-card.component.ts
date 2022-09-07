import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '@shared/util-interfaces';
@Component({
  selector: 'lib-product-card',
  templateUrl: './product-card.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
