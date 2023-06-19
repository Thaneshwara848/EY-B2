import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivComponent } from './directiv.component';

describe('DirectivComponent', () => {
  let component: DirectivComponent;
  let fixture: ComponentFixture<DirectivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivComponent]
    });
    fixture = TestBed.createComponent(DirectivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
