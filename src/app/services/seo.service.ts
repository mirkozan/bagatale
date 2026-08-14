import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from './translation.service';
@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title); private meta = inject(Meta); private lang = inject(TranslationService);
  update(title: string, description: string, path: string) {
    this.title.setTitle(title); this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title }); this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: `https://bagatale-productions.netlify.app${path}` });
    const href = `https://bagatale-productions.netlify.app${path}`;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = href;
    document.documentElement.lang = this.lang.language();
  }
}
