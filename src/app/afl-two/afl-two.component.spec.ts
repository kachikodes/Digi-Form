import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AflTwoComponent } from './afl-two.component';

describe('AflTwoComponent', () => {
  let component: AflTwoComponent;
  let fixture: ComponentFixture<AflTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AflTwoComponent]
    });
    fixture = TestBed.createComponent(AflTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
