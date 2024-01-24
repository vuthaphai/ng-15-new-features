import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../shared/components/header/header.component";

@Component({
    selector: 'app-blog',
    standalone: true,
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    imports: [CommonModule, RouterModule, HeaderComponent]
})
export class BlogComponent {

}
