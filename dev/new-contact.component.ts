import {Component} from 'angular2/core';
import {ContactService} from './Service/contact.service';
import {Contact} from './Class/Contact';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {OnInit} from '@angular/cli';

@Component(
    {
        templateUrl: '../templates/NewContactForm.html',
        styleUrls: ['../src/css/contact-list.css'],
        providers: [ContactService]
    }
)

export class NewContactComponent implements OnInit
{
    public passedlastName = "";
    constructor(private _contactService : ContactService, private _router : Router, private _routeParams: RouteParams){}

    onAddContact(fname,lname,email,phone)
    {
        let contact : Contact = {FirstName: fname, LastName: lname, Email: email, Phone: phone};
        this._contactService.insertContact(contact);
        this._router.navigate(['Contacts']);
    }

    ngOnInit(): any
    {
        this.passedlastName = this._routeParams.get('lastName');
    }
}