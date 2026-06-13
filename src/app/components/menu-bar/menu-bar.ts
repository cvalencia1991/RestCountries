import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from '../button/button';
import { ButtonService } from '../button/button.service';

@Component({
  selector: 'app-menu-bar',
  imports: [Button],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css',
})
export class MenuBar {
  private buttonService = inject(ButtonService);
  title = this.buttonService.title;
  label = this.buttonService.title;
  icon = this.buttonService.themeIcon;

  toggleDarkTheme() {
    this.buttonService.onChangeTheme();
  }
}
