import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedSupport } from './need-support';

describe('NeedSupport', () => {
  let component: NeedSupport;
  let fixture: ComponentFixture<NeedSupport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeedSupport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeedSupport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
