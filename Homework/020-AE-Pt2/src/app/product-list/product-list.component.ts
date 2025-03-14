import { Component, signal } from '@angular/core';
import { Product } from '../shared/models/model.product';
import { ProductCardComponent } from '../shared/templates/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  
  products = signal<Product[]>([
    {
    name: 'Laptop',
    price: 999
  },
  {
    name: 'Phone',
    price: 799
  },
  {
    name: 'Headphones',
    price: 199
  }
])
}
