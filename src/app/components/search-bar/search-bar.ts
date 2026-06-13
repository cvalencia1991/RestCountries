import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  value = input<string>('');
  searchChanged = output<string>();

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchChanged.emit(value);
  }
}
