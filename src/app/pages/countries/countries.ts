import { Component, inject, signal, DestroyRef, OnInit } from '@angular/core';
import { SearchBar } from '../../components/search-bar/search-bar';
import { DropDownOptions } from '../../components/drop-down-options/drop-down-options';
import { CountryService } from './country-service';
import { Card } from '../../components/card/card';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Loader } from '../../components/loader/loader';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { switchMap, tap, of, catchError } from 'rxjs';

@Component({
  selector: 'app-countries',
  imports: [SearchBar, DropDownOptions, Card, RouterLink, Loader],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class Countries implements OnInit {
  private countriesService = inject(CountryService);
  private destroyRef = inject(DestroyRef);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  filteredCountries = signal<any[]>([]);
  isLoading = signal(true);
  errorMessage = signal<string | null>(null);

  searchTerm = signal('');
  selectedRegion = signal('');

  ngOnInit() {
    this.route.queryParams
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((params) => {
          this.searchTerm.set(params['search'] || '');
          this.selectedRegion.set(params['region'] || '');
          this.isLoading.set(true);
          this.errorMessage.set(null);
        }),
        switchMap((params) =>
          this.countriesService.getCountries(params['region'], params['search'], 12).pipe(
            catchError((error) => {
              let msg = 'Could not load countries. Please try again later.';
              if (error.status === 401) {
                msg = 'Unauthorized access (401). Please check your API token.';
              } else if (error.message) {
                msg = error.message;
              }
              this.errorMessage.set(msg);
              this.isLoading.set(false);
              return of({ data: { objects: [] } });
            }),
          ),
        ),
      )
      .subscribe({
        next: (response: any) => {
          if (this.errorMessage()) {
            return;
          }
          const countries = response.data.objects.filter(
            (country: any) => country.flag?.url_svg || country.flag?.url_png,
          );
          this.filteredCountries.set(countries.slice(0, 8));
          this.isLoading.set(false);
        },
      });
  }

  handleSearch(value: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: value || null },
      queryParamsHandling: 'merge',
    });
  }

  handleRegion(value: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { region: value || null },
      queryParamsHandling: 'merge',
    });
  }
}
