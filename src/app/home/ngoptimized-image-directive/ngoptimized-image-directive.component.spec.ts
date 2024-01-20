import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoptimizedImageDirectiveComponent } from './ngoptimized-image-directive.component';

describe('NgoptimizedImageDirectiveComponent', () => {
  let component: NgoptimizedImageDirectiveComponent;
  let fixture: ComponentFixture<NgoptimizedImageDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NgoptimizedImageDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoptimizedImageDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
