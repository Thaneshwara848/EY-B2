import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedrivenfomrComponent } from './reactivedrivenfomr.component';

describe('ReactivedrivenfomrComponent', () => {
  let component: ReactivedrivenfomrComponent;
  let fixture: ComponentFixture<ReactivedrivenfomrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactivedrivenfomrComponent]
    });
    fixture = TestBed.createComponent(ReactivedrivenfomrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
