import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlistItemComponent } from './projectlist-item.component';

describe('ProjectlistItemComponent', () => {
  let component: ProjectlistItemComponent;
  let fixture: ComponentFixture<ProjectlistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
