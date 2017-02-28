import {Component} from '@angular/core';
import {PowerPipe} from './custom/power.pipe';

@Component({
    selector: 'app',
    templateUrl: `app/app.component.html`
})
export class AppComponent {
    name: string;
    powerNumber: number;

    constructor() {
        this.name = 'Angular 2';
        this.powerNumber = 2;
    }
}