import { Component, OnInit } from '@angular/core';
import { Product } from '@shared/util-interfaces';

@Component({
  selector: 'lib-shell',
  templateUrl: './shell.component.html',
  styles: [],
})
export class ShellComponent implements OnInit {
  products!: Product[];
  constructor() {}

  ngOnInit(): void {
    this.products = [
      { name: 'Sourdough', price: 1.99, img: 'sourdough.jpeg' },
      { name: 'Baguette', price: 1.20, img: 'baguette.jpeg' },
    ];
  }
}
