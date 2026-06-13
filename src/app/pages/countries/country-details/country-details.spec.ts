import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryDetails } from './country-details';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('CountryDetails', () => {
  let component: CountryDetails;
  let fixture: ComponentFixture<CountryDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDetails],
      providers: [
        provideHttpClient(),
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
