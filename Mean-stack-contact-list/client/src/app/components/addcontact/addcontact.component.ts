import { Component, OnInit , EventEmitter} from '@angular/core';
import {Contact} from '../../contact-list';
import {ContactService} from '../../contact.service';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css'],
  providers: [ContactService]
})
export class AddcontactComponent implements OnInit {
  contact = {
    firstname : '',
    lastname : '',
    phone : null,
  };
  contacts: Contact[];
  constructor(public contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    return this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }
  deleteContact(id: any) {
    return this.contactService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter(contact => contact._id !== id);
      });
    }

  addcontact() {
    return this.contactService.addcontact(this.contact).subscribe((contact) => {
      this.contacts.push(contact);
      this.contact = { firstname : '', lastname : '', phone: null};
    });
}
}
