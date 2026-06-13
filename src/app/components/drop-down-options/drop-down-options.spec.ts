import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownOptions } from './drop-down-options';

describe('DropDownOptions', () => {
  let component: DropDownOptions;
  let fixture: ComponentFixture<DropDownOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDownOptions],
    }).compileComponents();

    fixture = TestBed.createComponent(DropDownOptions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
