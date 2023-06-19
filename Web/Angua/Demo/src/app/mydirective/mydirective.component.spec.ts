import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydirectiveComponent } from './mydirective.component';

describe('MydirectiveComponent', () => {
  let component: MydirectiveComponent;
  let fixture: ComponentFixture<MydirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MydirectiveComponent]
    });
    fixture = TestBed.createComponent(MydirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
