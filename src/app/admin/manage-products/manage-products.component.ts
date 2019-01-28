import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, fromDocRef } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  model = new Product('', '', '', '', null);
  productCollection: AngularFirestoreCollection<Product>;
  Products: Observable<Product[]>;
  products: Observable<Product[]>;
  types = ['Website Design', 'Social Media Ads', 'Print Design', 'Logo Design', 'Design Only (flyers, business cards, post cards, etc)',
    'Printing', 'Package Deal (Multiple Services)'];

  constructor(public afs: AngularFirestore,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.productCollection = this.afs.collection('products');
    this.products = this.productCollection.valueChanges();
  }

  cancel() {

  }


  onSubmit() {
    const name: string = this.model.name;
    const price: number = this.model.price;
    const description: string = this.model.description;
    const image: string = this.model.image;
    console.log(this.model);
    this.afs.collection('products').add({
      name: name,
      description: description,
      image: image,
      price: price
    })
      .then(function (docRef) {
        console.log('Document successfully written! ' + docRef.id);
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  }

}
