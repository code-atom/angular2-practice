
import { Component } from '@angular/core';

@Component({
    selector: 'property-bind',
    template: `
        <div>Interpolation bind of property : {{message}}</div>
        <div>Square Bracket property binding : <span [textContent]="message"></span> </div>
        <div >bind prefix with element property :<span bind-textContent="message"></span></div>
        <style-bind></style-bind>
    `
})
export class PropertyBindComponent {
    message: string = "Hello World";
}