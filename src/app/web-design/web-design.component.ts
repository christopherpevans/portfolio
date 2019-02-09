import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { MatSnackBar } from '@angular/material';
import { AddToCartComponent } from '../shared/add-to-cart.component';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.scss']
})
export class WebDesignComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cartService: CartService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBar.openFromComponent(AddToCartComponent, {
      duration: 1000,
    });
  }

  total(total: any) {
    this.cartService.addToCart(total);
    // this.router.navigate(['/cart']);
  }
}
