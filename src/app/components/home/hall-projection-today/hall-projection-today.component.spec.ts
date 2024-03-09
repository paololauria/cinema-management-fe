import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallProjectionTodayComponent } from './hall-projection-today.component';

describe('HallProjectionTodayComponent', () => {
  let component: HallProjectionTodayComponent;
  let fixture: ComponentFixture<HallProjectionTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HallProjectionTodayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HallProjectionTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
