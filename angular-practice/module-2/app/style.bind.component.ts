import {Component} from '@angular/core';


@Component({
    selector:'style-bind',
    template:`
        <div [style.color]="isActive ? 'blue':'black'">synatic sugar style atttribute binding</div>
    `
})
export class StyleBindComponent {
    isActive:boolean = true;
}