import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { Observable } from 'rxjs';

interface Product {
  name: string;
  description: string;
  price: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  user = null;
  productCollection: AngularFirestoreCollection<Product>;
  Products: Observable<Product[]>;
  products;

  constructor(private auth: AuthService,
              public afs: AngularFirestore) { }

  ngOnInit() {
    this.productCollection = this.afs.collection('products');
      this.products = this.productCollection.valueChanges();
  }
}
