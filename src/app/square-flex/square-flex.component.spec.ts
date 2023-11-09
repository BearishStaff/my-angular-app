import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareFlexComponent } from './square-flex.component';

describe('SquareFlexComponent', () => {
  let component: SquareFlexComponent;
  let fixture: ComponentFixture<SquareFlexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquareFlexComponent]
    });
    fixture = TestBed.createComponent(SquareFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
