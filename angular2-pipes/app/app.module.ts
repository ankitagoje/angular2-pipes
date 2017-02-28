import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {InbuiltPipesComponent} from './inbuilt/inbuiltPipes.component';
import {PowerPipe} from './custom/power.pipe';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, InbuiltPipesComponent, PowerPipe],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }
