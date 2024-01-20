import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeShackingComponent } from './tree-shacking.component';

describe('TreeShackingComponent', () => {
  let component: TreeShackingComponent;
  let fixture: ComponentFixture<TreeShackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TreeShackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeShackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
