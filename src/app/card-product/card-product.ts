import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css',
})
export class CardProduct {
  title = input<string>()
  caption = input<string>()
  postUrl = input<string>()
  session = input<string>()
  button = input<string>()
}
