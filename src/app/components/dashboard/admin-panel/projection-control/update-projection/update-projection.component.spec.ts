import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectionComponent } from './update-projection.component';

describe('UpdateProjectionComponent', () => {
  let component: UpdateProjectionComponent;
  let fixture: ComponentFixture<UpdateProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateProjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
