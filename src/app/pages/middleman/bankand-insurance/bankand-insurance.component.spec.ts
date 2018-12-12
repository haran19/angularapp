import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankandInsuranceComponent } from './bankand-insurance.component';

describe('BankandInsuranceComponent', () => {
  let component: BankandInsuranceComponent;
  let fixture: ComponentFixture<BankandInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankandInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankandInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
