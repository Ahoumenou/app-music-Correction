import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRelatifComponent } from './form-relatif.component';

describe('FormRelatifComponent', () => {
  let component: FormRelatifComponent;
  let fixture: ComponentFixture<FormRelatifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRelatifComponent]
    });
    fixture = TestBed.createComponent(FormRelatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
