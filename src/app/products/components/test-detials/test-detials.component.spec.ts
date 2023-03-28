import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDetialsComponent } from './test-detials.component';

describe('TestDetialsComponent', () => {
  let component: TestDetialsComponent;
  let fixture: ComponentFixture<TestDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
