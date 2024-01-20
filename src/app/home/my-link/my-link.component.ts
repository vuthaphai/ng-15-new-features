import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-link',
  standalone: true,
  imports: [RouterLink],
  hostDirectives: [
    {
      directive: RouterLink,
      inputs: ['routerLink: image-directive']
    }
  ],
  templateUrl: './my-link.component.html',
  styleUrls: ['./my-link.component.scss']
})
export class MyLinkComponent {

}
