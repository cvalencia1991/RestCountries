import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError, timeout, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private countriesUrl = 'https://api.restcountries.com/countries/v5';

  getCountries(region?: string, name?: string, limit: number = 250) {
    let url = this.countriesUrl;
    let params: any = { per_page: limit };

    if (name) {
      url = `${this.countriesUrl}/name`;
      params.q = name;
    } else if (region) {
      params.region = region;
    }

    return this.http
      .get(url, {
        params,
        headers: {
          Authorization: `Bearer ${environment.token}`,
        },
      })
      .pipe(
        timeout(3000),
        catchError((error) => {
          console.error('API Error:', error);
          return throwError(() => new Error('something went wrong getting the countries'));
        }),
      );
  }

  getCountryByName(name: string) {
    return this.http
      .get<any>(`${this.countriesUrl}/name`, {
        params: { q: name },
        headers: {
          Authorization: `Bearer ${environment.token}`,
        },
      })
      .pipe(
        map((response) => {
          const country = response.data.objects[0];
          if (!country) return null;

          return {
            ...country,
            nativeName: country.names?.native
              ? (Object.values(country.names.native)[0] as any)?.common ||
                (Object.values(country.names.native)[0] as any)?.official
              : 'N/A',
            currenciesList: country.currencies
              ? Object.values(country.currencies)
                  .map((currency: any) => currency.name)
                  .join(', ')
              : 'N/A',
            languagesList: Array.isArray(country.languages)
              ? country.languages.map((lang: any) => lang.name).join(', ')
              : typeof country.languages === 'object'
                ? Object.values(country.languages).join(', ')
                : 'N/A',
            displaySubRegion: country.subregion || country.sub_region || 'N/A',
          };
        }),
        catchError((error) => {
          console.error('API Error:', error);
          return of(null);
        }),
      );
  }
}
