import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFilmProjectionNextWeekComponent } from './all-film-projection-next-week.component';

describe('AllFilmProjectionTodayComponent', () => {
  let component: AllFilmProjectionNextWeekComponent;
  let fixture: ComponentFixture<AllFilmProjectionNextWeekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFilmProjectionNextWeekComponent]
    });
    fixture = TestBed.createComponent(AllFilmProjectionNextWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
