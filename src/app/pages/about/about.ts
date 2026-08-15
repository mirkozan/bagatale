import {Component, inject} from '@angular/core';
import {TranslationService} from '../../services/translation.service';
import {SeoService} from '../../services/seo.service';

@Component({selector: 'app-about', templateUrl: './about.html', styleUrl: './about.scss'})
export class AboutComponent {
  readonly i18n = inject(TranslationService);

  constructor(seo: SeoService) {
    seo.update('About - Bagatale Productions', 'Ismerd meg a Bagatale Productions független és szabad produkciós műhelyt.', '/about');
  }
}
