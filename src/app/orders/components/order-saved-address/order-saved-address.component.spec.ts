import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSavedAddressComponent } from './order-saved-address.component';

describe('OrderSavedAddressComponent', () => {
  let component: OrderSavedAddressComponent;
  let fixture: ComponentFixture<OrderSavedAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSavedAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSavedAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
