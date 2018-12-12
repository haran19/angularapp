import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroServiceComponent } from './agro-service.component';

describe('AgroServiceComponent', () => {
  let component: AgroServiceComponent;
  let fixture: ComponentFixture<AgroServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
