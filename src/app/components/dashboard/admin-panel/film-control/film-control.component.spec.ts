import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmControlComponent } from './film-control.component';

describe('FilmControlComponent', () => {
  let component: FilmControlComponent;
  let fixture: ComponentFixture<FilmControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
