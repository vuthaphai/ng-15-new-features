import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DirectiveComponentApiComponent } from "./directive-component-api/directive-component-api.component";
import { FontColorDirective } from '../shared/directive/font-color.directive';
import { ItalicsFontDirective } from '../shared/directive/italics-font.directive';
import { MouseHoverDirective } from '../shared/directive/mouse-hover.directive';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        DirectiveComponentApiComponent,
        // FontColorDirective,
        // ItalicsFontDirective
        MouseHoverDirective
    ]
})
export class HomeModule { }
