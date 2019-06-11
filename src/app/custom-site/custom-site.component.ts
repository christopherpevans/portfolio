import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-site',
  templateUrl: './custom-site.component.html',
  styleUrls: ['./custom-site.component.scss']
})
export class CustomSiteComponent implements OnInit {

  public items = [
    {
      name: 'landing page',
      price: 1000,
      desc: 'Simplest package to get you started',
      cards: '100 business cards',
      storage: '50 GB',
      support: false,
      ssl: false
    },
    {
      name: 'blog',
      price: 3000,
      desc: 'The most popular package we offer',
      cards: '200 business cards',
      storage: '500 Gb',
      support: false,
      ssl: false
    },
    {
      name: 'ecommerce',
      price: 8000,
      desc: 'The perfect package for your small business',
      cards: '500 business cards',
      storage: '1 TB',
      support: true,
      ssl: false
    },
    {
      name: 'enterprise',
      price: 12000,
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
