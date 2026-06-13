import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Countries } from './countries';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('Countries', () => {
  let component: Countries;
  let fixture: ComponentFixture<Countries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Countries],
      providers: [
        provideHttpClient(),
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Countries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
