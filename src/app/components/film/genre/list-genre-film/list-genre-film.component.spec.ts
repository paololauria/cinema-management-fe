import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGenreFilmComponent } from './list-genre-film.component';

describe('ListGenreFilmComponent', () => {
  let component: ListGenreFilmComponent;
  let fixture: ComponentFixture<ListGenreFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGenreFilmComponent]
    });
    fixture = TestBed.createComponent(ListGenreFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
