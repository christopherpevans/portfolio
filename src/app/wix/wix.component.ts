import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wix',
  templateUrl: './wix.component.html',
  styleUrls: ['./wix.component.scss']
})
export class WixComponent implements OnInit {

  public items = [
    {
      name: 'landing page',
      price: 300,
      desc: 'Simplest package to get you started',
      cards: '100 business cards',
      storage: '50 GB',
      support: false,
      ssl: false
    },
    {
      name: 'blog',
      price: 600,
      desc: 'The most popular package we offer',
      cards: '200 business cards',
      storage: '500 Gb',
      support: false,
      ssl: false
    },
    {
      name: 'ecommerce',
      price: 1500,
      desc: 'The perfect package for your small business',
      cards: '500 business cards',
      storage: '1 TB',
      support: true,
      ssl: false
    },
    {
      name: 'enterprise',
      price: 2500,
      desc: 'Our most advanced & complete package',
      cards: '1000 business cards',
      storage: 'Unlimited',
      support: true,
      ssl: true
    }
  ];

  constructor() { }

  ngOnInit() {

  }

}
