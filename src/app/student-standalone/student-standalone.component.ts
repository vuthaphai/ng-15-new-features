import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-standalone.component.html',
  styleUrls: ['./student-standalone.component.scss']
})
export class StudentStandaloneComponent {

}
