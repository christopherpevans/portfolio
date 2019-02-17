import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
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

  constructor(public afs: AngularFirestore,
              public snackBar: MatSnackBar,
              public dialog: MatDialog) {}

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

  openDialog(product): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');

    });

  }}
@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})

export class DialogOverviewExampleDialogComponent {

  constructor( public productService: ProductService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(data: { name: string; }) {
    this.productService.deleteProduct(data);
    this.dialogRef.close();
  }

}
