import {Component} from 'angular2/core';
import {Router}  from 'angular2/router';
import {Contact} from './Class/Contact';

@Component(
    {
        selector: 'Contact',
        templateUrl: `templates/EditContactForm.html`,
        styleUrls: ['../src/css/contact-list.css'],
        inputs: ["contact","value"]
    }
)

export class ContactDetailComponent
{
    public contact: Contact = null;
    public value = {};

    constructor(private _router : Router){}

    onCreateNew()
    {
        this._router.navigate(['NewContactFromContact', {lastName: this.contact.LastName}]);
    }
}