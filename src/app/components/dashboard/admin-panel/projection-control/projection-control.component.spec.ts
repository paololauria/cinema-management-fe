import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionControlComponent } from './projection-control.component';

describe('ProjectionControlComponent', () => {
  let component: ProjectionControlComponent;
  let fixture: ComponentFixture<ProjectionControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectionControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
