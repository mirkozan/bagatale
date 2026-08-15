import {Component, inject, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TranslationService} from '../../services/translation.service';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  readonly i18n = inject(TranslationService);
  readonly theme = inject(ThemeService);
  readonly open = signal(false);

  close() {
    this.open.set(false);
  }
}
