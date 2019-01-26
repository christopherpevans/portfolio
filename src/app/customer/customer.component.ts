import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent, MatSnackBar } from '@angular/material';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  types = ['Website Design', 'Social Media Ads', 'Print Design', 'Logo Design', 'Design Only (flyers, business cards, post cards, etc)', 'Printing', 'Package Deal (Multiple Services)'];

  model = new Customer('', '', null, '', '', null, '');
  submitted = false;
  customer: any[] = [];
  minDate: any;
  date: Date;

  constructor(public snackBar: MatSnackBar,
              private router: Router,
              private dataService: DataService
              ) {

  }
  events: string[] = [];
  onSubmit() {
    this.submitted = true;
    // this.snackBar.openFromComponent(NotificationComponent, {
    //   duration: 2000,
    // });
    this.dataService.addCustomer(this.model)
    .subscribe(customer => this.customer.push(this.model));
    this.router.navigate(['/']);
    console.log(this.model);
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  ngOnInit() {
  this.date = new Date();
  this.minDate = this.date;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

}
