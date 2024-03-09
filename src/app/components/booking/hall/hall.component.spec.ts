import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallComponent } from './hall.component';

describe('Hall1Component', () => {
  let component: HallComponent;
  let fixture: ComponentFixture<HallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HallComponent]
    });
    fixture = TestBed.createComponent(HallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
