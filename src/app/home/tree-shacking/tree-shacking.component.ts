import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { add } from 'src/app/shared/utilts/utilts';

@Component({
  selector: 'app-tree-shacking',
  standalone: true,
  // imports: [CommonModule],
  imports: [NgIf],
  templateUrl: './tree-shacking.component.html',
  styleUrls: ['./tree-shacking.component.scss']
})
export class TreeShackingComponent {

  constructor(){
    const value = add(2,5)
    console.log('value: ', value);
    
  }

}
