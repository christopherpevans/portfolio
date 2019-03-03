import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log(this.cartService.cart);
  }

  deleteProduct(product) {
    console.log(product);
  }

}
