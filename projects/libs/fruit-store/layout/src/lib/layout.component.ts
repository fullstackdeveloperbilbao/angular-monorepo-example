import { Component, OnInit } from '@angular/core';
import { Product } from '@shared/util-interfaces';

@Component({
  selector: 'lib-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent implements OnInit {
  products!: Product[];
  constructor() { }

  ngOnInit(): void {
    this.products = [
      { name: 'Apple', price: 1.99, img: 'apple.jpg' },
      { name: 'Orange', price: 3.88, img: 'orange.jpg' },
    ];
  }

}
