import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambhiarPasswordComponent } from './cambhiar-password.component';

describe('CambhiarPasswordComponent', () => {
  let component: CambhiarPasswordComponent;
  let fixture: ComponentFixture<CambhiarPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambhiarPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambhiarPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
