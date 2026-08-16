import { Injectable, signal } from '@angular/core';

export type Language = 'hu' | 'en';
type Dictionary = Record<string, string>;

const hu: Dictionary = {
  'nav.home':'Kezdőlap','nav.about':'Rólunk','nav.videos':'Videók','nav.contact':'Kapcsolat','nav.menu':'Menü',
  'home.eyebrow':'Mozgás és kép · Pécs','home.title':'Bagatale','home.subtitle':'Ez a történet itt kezdődik.','home.lead':'A Bagatale nem egy kész stúdió, hanem egy fejlődő alkotói tér. Egy út, ami most indul, és ahol minden projekt, minden film és minden vizuális ötlet hozzájárul ahhoz, hogy valami nagyobbá váljon.','home.leadFollowup':'Ez a platform azért jött létre, hogy helyet adjon mindannak, amit útközben megtanulok, megélek és megmutatok - és hogy egyszer majd több projekt, több alkotó és több történet otthona legyen.','home.about':'Ismerj meg','home.videos':'Videók','home.contact':'Beszéljünk','home.note':'Friss ötletek, jó emberek, valódi történetek.','home.scroll':'Görgess tovább',
  'about.eyebrow':'A műhely mögött','about.title':'Egy látomás szülte','about.lead':'A Bagatale mögött egyelőre egyetlen alkotó áll - valaki, aki kíváncsiságból kezdett filmezni, és útközben rájött, hogy a történetekben örömét leli. A Bagatale egy műhely, ahol figyelek, tanulok és képekben mesélek el emberi történeteket.','about.detail':'Még egyedül dolgozom, de minden projekt egy lépés afelé, hogy a Bagatale idővel több alkotó és több történet otthona legyen. Egy közösségé. Addig is, ez a tér az én fejlődésem és látomásom lenyomata.','about.role':'Alapító','about.portrait':'Egy alkotó, nagy figyelemmel',
  'videos.eyebrow':'Nézd meg','videos.title':'Képek mozgásban.','videos.lead':'Néhány történet, amit örömmel készítettem.','videos.watch':'Megnézem YouTube-on','videos.channel':'A YouTube csatorna',
  'contact.eyebrow':'Dolgozzunk együtt','contact.title':'Van egy történeted?','contact.lead':'Írj pár sort róla. Minden jó projekt egy beszélgetéssel kezdődik.','contact.name':'Név','contact.email':'Email cím','contact.message':'Üzenet','contact.send':'Üzenet küldése','contact.success':'Köszönjük! Megkaptuk az üzeneted, hamarosan jelentkezünk.','contact.required':'Kérjük, töltsd ki ezt a mezőt.','footer.line':'Történetek mozgásban.','footer.youtube':'YouTube csatorna'
};
const en: Dictionary = {
  'nav.home':'Home','nav.about':'About','nav.videos':'Videos','nav.contact':'Contact','nav.menu':'Menu',
  'home.eyebrow':'Motion and Picture · Pécs','home.title':'Bagatale','home.subtitle':'This is where the story begins.','home.lead':'Bagatale is not a finished studio, but a creative space in progress. A journey that is just beginning, where every project, every film and every visual idea contributes to becoming something greater.','home.leadFollowup':'This platform was created to make room for everything I learn, experience and share along the way - and, one day, to become a home for more projects, more creators and more stories.','home.about':'Meet me','home.videos':'Watch videos','home.contact':'Let’s talk','home.note':'Fresh ideas, good people, real stories.','home.scroll':'Scroll to explore',
  'about.eyebrow':'Behind the studio','about.title':'Born from a vision','about.lead':'For now, Bagatale stands behind a single creator - someone who started making films out of curiosity and discovered along the way how much joy there is in stories. Bagatale is a studio where I pay attention, learn and tell human stories through images.','about.detail':'I am still working alone, but every project is a step toward Bagatale becoming, in time, a home for more creators and more stories. A community. Until then, this space is a record of my growth and vision.','about.role':'Founder','about.portrait':'One creator, a lot of care',
  'videos.eyebrow':'Take a look','videos.title':'Pictures in motion.','videos.lead':'A few stories I was happy to make.','videos.watch':'Watch on YouTube','videos.channel':'Visit the YouTube channel',
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
