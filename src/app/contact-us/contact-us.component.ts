import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../theme/utils/app-validators';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public lat = 29.8297;
  public lng = -95.6668;
  public zoom = 12;
  public contactForm: FormGroup;

  model = new Contact('', '', '', '');
  contact: any[] = [];

  constructor(public formBuilder: FormBuilder,
              private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, emailValidator])],
      phone: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  public onContactFormSubmit(values): void {
    if (this.contactForm.valid) {
      this.contactService.addContact(values)
    .subscribe(contact => this.contact.push(this.model));
    // form.reset();
      // console.log(values);
    }
  }

}
