import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AflFormComponent } from './afl-form.component';

describe('AflFormComponent', () => {
  let component: AflFormComponent;
  let fixture: ComponentFixture<AflFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AflFormComponent]
    });
    fixture = TestBed.createComponent(AflFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
