import {Injectable} from 'angular2/core';
import {CONTACTS} from '../Class/mock-contact';
import {Contact} from '../Class/Contact';

@Injectable()
export class ContactService
{
    getContacts()
    {
        return Promise.resolve(CONTACTS);
    }

    insertContact(contact : Contact)
    {
        Promise.resolve(CONTACTS).then((contacts: Contact[]) => contacts.push(contact));
    }
}