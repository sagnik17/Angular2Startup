import {Component} from 'angular2/core';

@Component(
    {
        selector: 'Contact',
        templateUrl: `templates/ContactForm.html`,
        styleUrls: ['../src/css/mycompoenent.css'],
        inputs: ["contact","value"]
    }
)

export class ContactDetailComponent
{
    public contact = {};
    public value = {};
}