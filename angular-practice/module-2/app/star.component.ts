import { Component } from '@angular/core';

@Component({
    selector: 'star',
    templateUrl:'./app/star.component.html'
})
export class StarComponent {
    isActive: boolean = false;

    OnClick(){
        this.isActive = !this.isActive;
    }
}
