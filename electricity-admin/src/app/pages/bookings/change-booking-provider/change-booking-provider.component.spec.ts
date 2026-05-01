import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBookingProviderComponent } from './change-booking-provider.component';

describe('ChangeBookingProviderComponent', () => {
  let component: ChangeBookingProviderComponent;
  let fixture: ComponentFixture<ChangeBookingProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeBookingProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeBookingProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
