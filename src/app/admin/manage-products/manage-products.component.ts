import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
interface Product {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  productCollection: AngularFirestoreCollection<Product>;
  Products: Observable<Product[]>;
  products: Observable<Product[]>;

  constructor(public afs: AngularFirestore) { }

  ngOnInit() {
    this.productCollection = this.afs.collection('products');
      this.products = this.productCollection.valueChanges();
  }

  cancel() {

  }

  save() {

  }

}
