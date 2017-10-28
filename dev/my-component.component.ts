import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {TestComponent} from './test.component';

@Component({
    selector: 'my-component',
    template: `This is my second component.I am <span [style.color]="inputElement.value ==='yes' ? 'red' : ''">{{name}}</span> <br>
                This is my first Anugular JS App and <span [class.is-awesome]="inputElement.value ==='yes'">It's so awesome !!!</span>
                <br>
                <br>
                Is it awesome ?
                <input type="text" #inputElement (keyup)="1">
                <br><br>
                <button [disabled]="inputElement.value !=='yes'">Only Enabled if Yes is entered</button><br>

                <br>
                <input (keyup)="onKey($event)">
                <p>{{values}}</p><br><test></test>
    `,
    styleUrls: ['src/css/mycompoenent.css'],
    directives: [TestComponent]
})

export class MyComponentComponent implements OnInit
{
    name: string;
    values = '';

    ngOnInit() : any {
    this.name = "Sagnik Saha";
    }
    onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }

}
