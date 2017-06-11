import { Component } from '@angular/core';

@Component({
    selector: 'two-way',
    template: `
        <input   type="text" [(ngModel)]="title"/>
        <button (click)="title=''">clear</button>
        Preview :{{title}}
    `
})
export class TwowayBindComponent {
    title: string = "Angular Preview";
}