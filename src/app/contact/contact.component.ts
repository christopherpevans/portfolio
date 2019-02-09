import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { MatDatepickerInputEvent, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormSubmissionComponent } from '../shared/form-submission.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  types = ['Website Design', 'Social Media Ads', 'Print Design', 'Logo Design', 'Design Only (flyers, business cards, post cards, etc)', 'Printing', 'Package Deal (Multiple Services)'];
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

  onSubmit() {
    this.submitted = true;
    this.snackBar.openFromComponent(FormSubmissionComponent, {
      duration: 2000,
    });
    this.dataService.addContact(this.model)
    .subscribe(contact => this.contact.push(this.model));
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.date = new Date();
    this.minDate = this.date;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

}


