import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../models/contact';
import { MatDatepickerInputEvent, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormSubmissionComponent } from '../shared/form-submission.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  types = ['Wordpress Website', 'Wix Website', 'Shopify Website', 'Custom Website', 'Logo Design', 'Package Deal (Multiple Services)', 'Google Services (Adwords, Analytics, Search Console)'];
  budgets = ['$250 or less', '$250 - $500', '$500 - $1000', '$1000 - $1500', '$1500 or more'];
  // model = new Contact('Princeton', 'Princetonevans@yahoo.com', 'Big Blog', '2018-11-09T06:00:00.000Z', 8322353613, 'Logo');
  model = new Contact('', '', '', '', null, '', '');
  submitted = false;
  contact: any[] = [];

  minDate: any;
  date: Date;
  constructor(public snackBar: MatSnackBar,
    private router: Router,
    private dataService: DataService) { }

  events: string[] = [];

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.snackBar.openFromComponent(FormSubmissionComponent, {
      duration: 2000,
    });
    this.dataService.addContact(this.model)
    .subscribe(contact => this.contact.push(this.model));
    form.reset();
    this.router.navigate(['pricing/webdesign']);
  }

  ngOnInit() {
    this.date = new Date();
    this.minDate = this.date;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

}


