import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-blog',
    standalone: true,
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    imports: [CommonModule, HeaderComponent]
})
export class BlogComponent {

}
