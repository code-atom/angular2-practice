import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { PropertyBindComponent } from './property.bind.component';
import { ClassBindComponent } from './class.bind.component';
import { StyleBindComponent } from './style.bind.component';
import { EventBindComponet } from './event.bind.component';
import { TwowayBindComponent } from './two.way.bind.component';
import { StarComponent } from './star.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        PropertyBindComponent,
        ClassBindComponent,
        StyleBindComponent,
        EventBindComponet,
        TwowayBindComponent,
        StarComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }