import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroShopComponent } from './agro-shop.component';

describe('AgroShopComponent', () => {
  let component: AgroShopComponent;
  let fixture: ComponentFixture<AgroShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
