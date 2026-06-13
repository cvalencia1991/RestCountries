import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [DecimalPipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  country = input.required<any>();

  countryName() {
    return this.country().names?.common ?? 'Unknown country';
  }

  flagUrl() {
    return this.country().flag?.url_svg ?? this.country().flag?.url_png ?? '';
  }

  capitalName() {
    return this.country().capitals?.[0]?.name ?? 'No capital';
  }
}
