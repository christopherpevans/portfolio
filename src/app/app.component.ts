import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Gtag } from 'angular-gtag';
import { Router, NavigationEnd } from '@angular/router';

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
  products: Observable<Product[]>;

  constructor(private auth: AuthService,
              public afs: AngularFirestore,
              public gtag: Gtag,
              private router: Router) {
                this.router.events.subscribe(event => {
                  if (event instanceof NavigationEnd) {
                    (<any>window).ga('set', 'page', event.urlAfterRedirects);
                    (<any>window).ga('send', 'pageview');
                  }
                });
              }

  ngOnInit() {
  }
}
