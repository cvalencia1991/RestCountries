import { Routes } from '@angular/router';
import { Countries } from './pages/countries/countries';
import { CountryDetails } from './pages/countries/country-details/country-details';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { titleResolver } from './core/resolvers/title.resolver';

export const routes: Routes = [
  {
    path: '',
    component: Countries,
    title: 'Rest Countries',
  },
  {
    path: ':name',
    component: CountryDetails,
    title: titleResolver,
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page Not Found',
  },
];
