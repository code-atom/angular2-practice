import { Component } from '@angular/core';


@Component({
    selector:'class-bind',
    styles:[`
        .isActive {
            background-color: #CCC;
        }
    `],
    template:`
        <button [class.isActive] ="isActive">Class binded Button</button>
        <br>
        <button [class] ="isActive ? 'isActive':''">Class binded Button with expression in property assignment using square bracket</button>
        <br/>
        <button class ="{{isActive ? 'isActive':''}}">Class binded Button with expression in property assignment using interpolation</button>
        
    `
})
export class ClassBindComponent {
    isActive:boolean = true;

}