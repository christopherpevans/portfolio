import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public afs: AngularFirestore) { }

  deleteProduct(product: { name: string; }) {
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
}
