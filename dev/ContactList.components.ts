import {Component} from 'angular2/core';
import {ContactDetailComponent} from './ContactDetails.component';
import {ContactService} from './Service/contact.service'
import {Contact} from './Class/Contact'
import {OnInit} from '@angular/cli';

@Component(
    {
        selector: 'Contact-List',
        template: `<ul>
        <li title="Click for Details" class = "tooltiptext" *ngFor="#contact of contacts" (click) = "onSelect(contact)"
        [class.is-awesome] = "selectedcontact === contact">
            Name : {{contact.FirstName}} {{contact.LastName}}   
        </li>
        </ul>
        <Contact [contact] = selectedcontact [value] = showcontent></Contact>`,
        styleUrls: ['../src/css/contact-list.css'],
        directives: [ContactDetailComponent],
        providers: [ContactService]
    }
)

export class ContactListComponent implements OnInit
{
    public contacts: Contact [];
    public showcontent = false;
    public selectedcontact = {};

    constructor(private _contactService : ContactService){}

    onSelect(contact)
    {
      this.showcontent = true;
      this.selectedcontact = contact;
    }

    getContact()
    {
      this._contactService.getContacts().then((contactlist: Contact[]) => this.contacts = contactlist);
      
      console.log('this.contact = ' + this.contacts);
    }

    ngOnInit():any
    {
      this.getContact();
    }

    
}