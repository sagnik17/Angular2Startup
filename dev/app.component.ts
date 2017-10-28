import {Component} from 'angular2/core';
import {MyComponentComponent} from './my-component.component';
import {ContactListComponent} from './ContactList.components';
import {NewContactComponent} from './new-contact.component'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {RouteConfig} from 'angular2/router'


@Component({
    selector: 'my-app',
    templateUrl: '../templates/demo.html',
    styleUrls: ['../src/css/mycompoenent.css'],
    directives: [MyComponentComponent,ContactListComponent, ROUTER_DIRECTIVES]
})

@RouteConfig(
    [
        {path: '/Contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
        {path: '/NewContact', name: 'NewContact', component: NewContactComponent}
    ]
)
export class AppComponent {

  

}
