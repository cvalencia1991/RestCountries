import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  isDarkTheme = signal<boolean>(false);
  title = computed(() => (this.isDarkTheme() ? 'Light Mode' : 'Dark Mode'));
  themeIcon = computed(() =>
    this.isDarkTheme() ? 'assets/icons/lightMode.svg' : 'assets/icons/darkMode.svg',
  );

  onChangeTheme() {
    this.isDarkTheme.update((isDarkThemeOn) => !isDarkThemeOn);
    document.body.classList.toggle('dark-theme', this.isDarkTheme());
  }
}
