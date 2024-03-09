import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFilmProjectionTodayComponent } from './all-film-projection-today.component';

describe('AllFilmProjectionTodayComponent', () => {
  let component: AllFilmProjectionTodayComponent;
  let fixture: ComponentFixture<AllFilmProjectionTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllFilmProjectionTodayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllFilmProjectionTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
