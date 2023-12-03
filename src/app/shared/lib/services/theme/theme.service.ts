import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'dark' | 'light';

@Injectable()
export class ThemeService {
  $theme = new BehaviorSubject<Theme>('light');

  setTheme(theme: Theme) {
    this.$theme.next(theme);
  }

  toggleTheme() {
    const theme = this.$theme.getValue();
    this.setTheme(theme === 'dark' ? 'light' : 'dark');
  }
}
