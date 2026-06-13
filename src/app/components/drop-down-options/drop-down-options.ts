import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-drop-down-options',
  imports: [],
  templateUrl: './drop-down-options.html',
  styleUrl: './drop-down-options.css',
})
export class DropDownOptions {
  selected = input<string>('');
  regionChanged = output<string>();

  onRegionChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.regionChanged.emit(value);
  }
}
