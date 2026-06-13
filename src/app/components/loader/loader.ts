import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  template: `
    <section class="loader-container" aria-label="Loading content">
      <span class="loader"></span>
    </section>
  `,
  styles: `
    .loader-container {
      display: grid;
      place-items: center;
      min-height: 10rem;
      width: 100%;
    }

    .loader {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 50%;
      border: 0.18rem solid transparent;
      border-top-color: #2b3844; /* Color azul oscuro/grisáceo del tema */
      border-right-color: #2b3844;
      animation: spin 0.75s linear infinite;
    }

    :host-context(.dark-theme) .loader {
      border-top-color: var(--white);
      border-right-color: var(--white);
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `,
})
export class Loader {}
