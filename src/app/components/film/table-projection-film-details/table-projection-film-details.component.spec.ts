import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProjectionFilmDetailsComponent } from './table-projection-film-details.component';

describe('TableProjectionFilmDetailsComponent', () => {
  let component: TableProjectionFilmDetailsComponent;
  let fixture: ComponentFixture<TableProjectionFilmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableProjectionFilmDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableProjectionFilmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
