import {Component, inject} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {TranslationService} from '../../services/translation.service';
import {SeoService} from '../../services/seo.service';

interface Video {
  id: string;
  titleHu: string;
  titleEn: string;
  descHu: string;
  descEn: string;
  relatedUrl?: string;
  relatedLinkHu?: string;
  relatedLinkEn?: string;
}

@Component({selector: 'app-videos', templateUrl: './videos.html', styleUrl: './videos.scss'})
export class VideosComponent {
  readonly i18n = inject(TranslationService);
  private sanitizer = inject(DomSanitizer);
  readonly videos: Video[] = [{
    id: 'zmvnhJFkWEM',
    titleHu: 'Repülő Párduc UB 2026',
    titleEn: 'Repülő Párduc UB 2026',
    descHu: 'Csuth Tomi tehet minderről. Elkísért minket és felvette, ahogy Esztivel ketten körbefutjuk a nagy tavat az UltraBalatonon. Remek csapat kísért. Hosszú idő után itt akadt kezembe egy kamera, hogy vágóképeket készítsek. Tomival abban egyeztünk meg, hogy ha eljön velünk, megkapom a felvételeket, hogy valamit kezdjek velük. Ez lett belőle. Az Ő története az eseményről ',
    descEn: 'Tomi Csuth is to blame for all of this. He joined us and filmed Eszti and me as we ran around the big lake together at the UltraBalaton event. A great team accompanied us. After a long time, I had a camera in my hands again to shoot some B-roll footage. Tomi and I agreed that if he came with us, I would get the recordings to make something of it. This is what came of it. His story about the event is available ',
    relatedUrl: 'https://youtu.be/MOeE-Lj52mo?si=BrTBOmpBfpNflOaH',
    relatedLinkHu: 'itt',
    relatedLinkEn: 'here'
  }, {
    id: 'ejpiqHvOSTI',
    titleHu: 'Második videó',
    titleEn: 'Second video',
    descHu: 'Leírás hamarosan.',
    descEn: 'Description coming soon.'
  }];

  constructor(seo: SeoService) {
    seo.update('Videos — Bagatale Productions', 'Bagatale Productions videói és mozgóképes történetei.', '/videos');
  }

  title(v: Video) {
    return this.i18n.language() === 'hu' ? v.titleHu : v.titleEn
  }

  desc(v: Video) {
    return this.i18n.language() === 'hu' ? v.descHu : v.descEn
  }

  url(v: Video): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/' + v.id)
  }
}
