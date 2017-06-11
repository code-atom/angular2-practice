import {Component} from '@angular/core';

@Component({
    selector:'event-bind',
    template:`
        <div (click)="onDivClick($event)">
            <button on-click="onClick()">Click me!</button>
            <button (click)="onClickWithStopPropagation($event)">Click me only !</button>
        </div>
    `
})
export class EventBindComponet {

    onClick() {
        console.log('click button');
    }

    onDivClick($event) {
        console.log('Div clicked');
    }

    onClickWithStopPropagation($event){
        $event.stopPropagation();
        console.log('Click only me !')
    }
}