import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopify',
  templateUrl: './shopify.component.html',
  styleUrls: ['./shopify.component.scss']
})
export class ShopifyComponent implements OnInit {
  public items = [
    {
      name: 'starter',
      price: 800,
      desc: 'Simplest package to get you started',
      cards: '100',
      storage: '50 GB',
      support: false,
      ssl: false
    },
    {
      name: 'premium',
      price: 1100,
      desc: 'The most popular package we offer',
      cards: '2000',
      storage: '500 Gb',
      support: false,
      ssl: false
    },
    {
      name: 'business',
      price: 1250,
      desc: 'Perfect for your small business.',
      cards: 'Unlimited',
      storage: '1 TB',
      support: true,
      ssl: false
    },
    {
      name: 'enterprise',
      price: 1500,
      desc: 'Our most advanced & complete package',
      cards: 'Unlimited',
      storage: 'Unlimited',
      support: true,
      ssl: true
    }
  ];

  constructor() {}

  ngOnInit() {}
}
