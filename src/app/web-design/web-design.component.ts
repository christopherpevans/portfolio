import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { CartService } from '../services/cart.service';
import { MatSnackBar } from '@angular/material';
import { AddToCartComponent } from '../shared/add-to-cart.component';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.scss']
})
export class WebDesignComponent implements OnInit {

  products: Observable<Product[]>;
  productCollection: AngularFirestoreCollection<Product>;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private cartService: CartService,
              private snackBar: MatSnackBar,
              public afs: AngularFirestore) { }

  ngOnInit() {
    this.productCollection = this.afs.collection('products');
    (this.products = this.productCollection.valueChanges());
  }

  openSnackBar(product) {
    console.log(product);
    this.snackBar.openFromComponent(AddToCartComponent, {
      duration: 1000,
    });
  }

  total(total: any) {
    this.cartService.addToCart(total);
    // this.router.navigate(['/cart']);
  }
}
