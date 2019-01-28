import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecteditorComponent } from './projecteditor.component';

describe('ProjecteditorComponent', () => {
  let component: ProjecteditorComponent;
  let fixture: ComponentFixture<ProjecteditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjecteditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecteditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
