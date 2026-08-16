import { Injectable, signal } from '@angular/core';

export type Language = 'hu' | 'en';
type Dictionary = Record<string, string>;

const hu: Dictionary = {
  'nav.home':'Kezdőlap','nav.about':'Rólunk','nav.videos':'Videók','nav.contact':'Kapcsolat','nav.menu':'Menü',
  'home.eyebrow':'Kreatív produkció · Pécs','home.title':'Bagatale','home.subtitle':'Ez a történet itt kezdődik.','home.lead':'A Bagatale nem egy kész stúdió, hanem egy fejlődő alkotói tér. Egy út, ami most indul, és ahol minden projekt, minden film és minden vizuális ötlet hozzájárul ahhoz, hogy valami nagyobbá váljon.','home.leadFollowup':'Ez a platform azért jött létre, hogy helyet adjon mindannak, amit útközben megtanulok, megélek és megmutatok - és hogy egyszer majd több projekt, több alkotó és több történet otthona legyen.','home.about':'Ismerj meg','home.videos':'Videók','home.contact':'Beszéljünk','home.note':'Friss ötletek, jó emberek, valódi történetek.','home.scroll':'Görgess tovább',
  'about.eyebrow':'A műhely mögött','about.title':'Kíváncsiságból indult. Emberekért dolgozik.','about.lead':'A Bagatale egy független produkciós műhely, ahol a jó ötletek képernyőre kerülnek. Dokumentumfilmeket, márkatörténeteket és mindenféle mozgóképet készítünk.','about.detail':'Hiszünk az egyszerű, emberi történetek erejében. A munkánk középpontjában a figyelem áll: meghallgatni, megérteni, aztán képekben elmesélni.','about.role':'Alapító · rendező','about.portrait':'Egy kis csapat, nagy figyelemmel',
  'videos.eyebrow':'Nézd meg','videos.title':'Képek mozgásban.','videos.lead':'Néhány történet, amit örömmel készítettünk.','videos.watch':'Megnézem YouTube-on','videos.channel':'YouTube csatornánk',
  'contact.eyebrow':'Dolgozzunk együtt','contact.title':'Van egy történeted?','contact.lead':'Írj pár sort róla. Minden jó projekt egy beszélgetéssel kezdődik.','contact.name':'Név','contact.email':'Email cím','contact.message':'Üzenet','contact.send':'Üzenet küldése','contact.success':'Köszönjük! Megkaptuk az üzeneted, hamarosan jelentkezünk.','contact.required':'Kérjük, töltsd ki ezt a mezőt.','footer.line':'Történetek mozgásban.','footer.youtube':'YouTube csatorna'
};
const en: Dictionary = {
  'nav.home':'Home','nav.about':'About','nav.videos':'Videos','nav.contact':'Contact','nav.menu':'Menu',
  'home.eyebrow':'Creative production · Pécs','home.title':'Bagatale','home.subtitle':'This is where the story begins.','home.lead':'Bagatale is not a finished studio, but a creative space in progress. A journey that is just beginning, where every project, every film and every visual idea contributes to becoming something greater.','home.leadFollowup':'This platform was created to make room for everything I learn, experience and share along the way — and, one day, to become a home for more projects, more creators and more stories.','home.about':'Meet me','home.videos':'Watch videos','home.contact':'Let’s talk','home.note':'Fresh ideas, good people, real stories.','home.scroll':'Scroll to explore',
  'about.eyebrow':'Behind the studio','about.title':'Started with curiosity. Built for people.','about.lead':'Bagatale is an independent production studio where good ideas make it to the screen. We create documentaries, brand stories and all kinds of moving images.','about.detail':'We believe in the power of simple, human stories. Attention is at the heart of our work: listening, understanding, then telling it through images.','about.role':'Founder · director','about.portrait':'A small team, a lot of care',
  'videos.eyebrow':'Take a look','videos.title':'Pictures in motion.','videos.lead':'A few stories we were happy to make.','videos.watch':'Watch on YouTube','videos.channel':'Visit our YouTube channel',
  'contact.eyebrow':'Let’s work together','contact.title':'Have a story to tell?','contact.lead':'Send us a few lines. Every good project starts with a conversation.','contact.name':'Name','contact.email':'Email address','contact.message':'Message','contact.send':'Send message','contact.success':'Thank you! We received your message and will be in touch soon.','contact.required':'Please fill out this field.','footer.line':'Pictures in motion.','footer.youtube':'YouTube channel'
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
