import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveComponentApiComponent } from './directive-component-api.component';

describe('DirectiveComponentApiComponent', () => {
  let component: DirectiveComponentApiComponent;
  let fixture: ComponentFixture<DirectiveComponentApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DirectiveComponentApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveComponentApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
