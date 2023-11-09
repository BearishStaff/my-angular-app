import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxMinMeterComponent } from './max-min-meter.component';

describe('MaxMinMeterComponent', () => {
  let component: MaxMinMeterComponent;
  let fixture: ComponentFixture<MaxMinMeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaxMinMeterComponent]
    });
    fixture = TestBed.createComponent(MaxMinMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
