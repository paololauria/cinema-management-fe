import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFilmProjectionComponent } from './all-film-projection.component';

describe('AllFilmProjectionComponent', () => {
  let component: AllFilmProjectionComponent;
  let fixture: ComponentFixture<AllFilmProjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFilmProjectionComponent]
    });
    fixture = TestBed.createComponent(AllFilmProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
