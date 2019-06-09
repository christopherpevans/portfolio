import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  public items = [
    {
      name: 'starter',
      price: 1199,
      desc: 'Simplest package to get you started',
      count: '100',
      storage: '50 GB',
      support: false,
      ssl: false
    },
    {
      name: 'premium',
      price: 1699,
      desc: 'The most popular package we offer',
      count: '2000',
      storage: '500 Gb',
      support: false,
      ssl: false
    },
    {
      name: 'business',
      price: 2499,
      desc: 'The perfect package for your small business',
      count: 'Unlimited',
      storage: '1 TB',
      support: true,
      ssl: false
    },
    {
      name: 'enterprise',
      price: 3000,
      desc: 'Our most advanced & complete package',
      count: 'Unlimited',
      storage: 'Unlimited',
      support: true,
      ssl: true
    }
  ];

  constructor() {}

  ngOnInit() {}
}
