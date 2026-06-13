import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';
import { CountryService } from '../country-service';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Button } from '../../../components/button/button';
import { Loader } from '../../../components/loader/loader';

@Component({
  selector: 'app-country-details',
  imports: [AsyncPipe, RouterLink, Button, DecimalPipe, Loader],
  templateUrl: './country-details.html',
  styleUrl: './country-details.css',
})
export class CountryDetails implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private countryService = inject(CountryService);
  private router = inject(Router);
  country$!: Observable<any>;

  ngOnInit(): void {
    this.country$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const name = params.get('name');
        if (name) {
          return this.countryService.getCountryByName(name);
        }
        return of(null);
      }),
      tap((country) => {
        if (!country) {
          // Si no hay país, redirigimos a una ruta que dispare el 404
          this.router.navigate(['/404'], { skipLocationChange: true });
        }
      }),
    );
  }
}
