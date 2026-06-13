import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-component',
  imports: [],
  templateUrl: './not-found-component.html',
  styleUrl: './not-found-component.css',
})
export class NotFoundComponent {
  private router = inject(Router);

  goHome(): void {
    this.router.navigate(['/']);
  }
}
