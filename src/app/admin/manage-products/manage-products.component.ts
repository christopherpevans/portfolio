import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  fromDocRef
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit, OnChanges {
  id: number;
  model = new Product('', '', '', null);
  productCollection: AngularFirestoreCollection<Product>;
  Products: Observable<Product[]>;
  products: Observable<Product[]>;
  types = [
    'Website Design',
    'Social Media Ads',
    'Print Design',
    'Logo Design',
    'Design Only (flyers, business cards, post cards, etc)',
    'Printing',
    'Package Deal (Multiple Services)'
  ];

  @ViewChild('customerForm') form: any;

  constructor(public afs: AngularFirestore, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.productCollection = this.afs.collection('products');
    (this.products = this.productCollection.valueChanges());
  }

  onSubmit() {
    this.afs
      .collection('products')
      .doc(this.model.name)
      .set(Object.assign({}, this.model));
      this.form.resetForm();
  }

  remove(product: { name: string }) {
    this.afs
      .collection('products')
      .doc(product.name)
      .delete()
      .then(function() {
        console.log('Document successfully deleted!');
      })
      .catch(function(error) {
        console.error('Error removing document: ', error);
      });
  }

  ngOnChanges() {
    console.log(this.products);
  }
}
