import { Injectable, signal } from '@angular/core';

export type Language = 'hu' | 'en';
type Dictionary = Record<string, string>;

const hu: Dictionary = {
  'nav.home':'Kezdőlap','nav.about':'Rólunk','nav.videos':'Videók','nav.contact':'Kapcsolat','nav.menu':'Menü',
  'home.eyebrow':'Kreatív produkció · Pécs','home.title':'Történetek, amik veled maradnak.','home.lead':'A Bagatale Productions filmeket, videókat és vizuális történeteket készít — őszintén, játékosan, részletekre figyelve.','home.about':'Ismerj meg minket','home.videos':'Videók','home.contact':'Beszéljünk','home.note':'Friss ötletek, jó emberek, valódi történetek.','home.scroll':'Görgess tovább',
  'about.eyebrow':'A műhely mögött','about.title':'Kíváncsiságból indult. Emberekért dolgozik.','about.lead':'A Bagatale egy független produkciós műhely, ahol a jó ötletek képernyőre kerülnek. Dokumentumfilmeket, márkatörténeteket és mindenféle mozgóképet készítünk.','about.detail':'Hiszünk az egyszerű, emberi történetek erejében. A munkánk középpontjában a figyelem áll: meghallgatni, megérteni, aztán képekben elmesélni.','about.role':'Alapító · rendező','about.portrait':'Egy kis csapat, nagy figyelemmel',
  'videos.eyebrow':'Nézd meg','videos.title':'Képek mozgásban.','videos.lead':'Néhány történet, amit örömmel készítettünk.','videos.watch':'Megnézem YouTube-on','videos.channel':'YouTube csatornánk',
  'contact.eyebrow':'Dolgozzunk együtt','contact.title':'Van egy történeted?','contact.lead':'Írj pár sort róla. Minden jó projekt egy beszélgetéssel kezdődik.','contact.name':'Név','contact.email':'Email cím','contact.message':'Üzenet','contact.send':'Üzenet küldése','contact.success':'Köszönjük! Megkaptuk az üzeneted, hamarosan jelentkezünk.','contact.required':'Kérjük, töltsd ki ezt a mezőt.','footer.line':'Történetek, képek és hangok.','footer.youtube':'YouTube csatorna'
};
const en: Dictionary = {
  'nav.home':'Home','nav.about':'About','nav.videos':'Videos','nav.contact':'Contact','nav.menu':'Menu',
  'home.eyebrow':'Creative production · Pécs','home.title':'Stories that stay with you.','home.lead':'Bagatale Productions makes films, videos and visual stories — honestly, playfully, with an eye for detail.','home.about':'Meet the team','home.videos':'Watch videos','home.contact':'Let’s talk','home.note':'Fresh ideas, good people, real stories.','home.scroll':'Scroll to explore',
  'about.eyebrow':'Behind the studio','about.title':'Started with curiosity. Built for people.','about.lead':'Bagatale is an independent production studio where good ideas make it to the screen. We create documentaries, brand stories and all kinds of moving images.','about.detail':'We believe in the power of simple, human stories. Attention is at the heart of our work: listening, understanding, then telling it through images.','about.role':'Founder · director','about.portrait':'A small team, a lot of care',
  'videos.eyebrow':'Take a look','videos.title':'Pictures in motion.','videos.lead':'A few stories we were happy to make.','videos.watch':'Watch on YouTube','videos.channel':'Visit our YouTube channel',
  'contact.eyebrow':'Let’s work together','contact.title':'Have a story to tell?','contact.lead':'Send us a few lines. Every good project starts with a conversation.','contact.name':'Name','contact.email':'Email address','contact.message':'Message','contact.send':'Send message','contact.success':'Thank you! We received your message and will be in touch soon.','contact.required':'Please fill out this field.','footer.line':'Stories, pictures and sound.','footer.youtube':'YouTube channel'
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly language = signal<Language>(this.readLanguage());
  private dictionaries = { hu, en };
  setLanguage(language: Language) {
    this.language.set(language);
    try { globalThis.localStorage?.setItem('bagatale-language', language); } catch { /* storage may be unavailable */ }
    document.documentElement.lang = language;
  }
  toggle() { this.setLanguage(this.language() === 'hu' ? 'en' : 'hu'); }
  t(key: string) { return this.dictionaries[this.language()][key] ?? key; }

  private readLanguage(): Language {
    try {
      return (globalThis.localStorage?.getItem('bagatale-language') as Language) || 'hu';
    } catch {
      return 'hu';
    }
  }
}
