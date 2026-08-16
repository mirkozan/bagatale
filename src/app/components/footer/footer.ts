import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslationService} from '../../services/translation.service';
import {ThemeService} from '../../services/theme.service';

@Component({selector: 'app-footer', imports: [RouterLink], templateUrl: './footer.html', styleUrl: './footer.scss'})
export class FooterComponent {
  readonly i18n = inject(TranslationService);
  readonly theme = inject(ThemeService);
}
