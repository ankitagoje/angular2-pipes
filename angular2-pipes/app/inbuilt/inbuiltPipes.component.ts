import {Component} from '@angular/core';

@Component({
    selector: 'inbuilt',
    templateUrl: `app/inbuilt/inbuiltPipes.component.html`
})
export class InbuiltPipesComponent {
    text: string;
    currentDate: Date;
    pi: number;

    constructor() {
        this.text = "This is LOWERCASE/ UPPERCASE pipe";
        this.currentDate = new Date();
        this.pi = 3.1415927;
    }
}