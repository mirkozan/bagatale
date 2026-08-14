import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly dark = signal(this.readTheme());
  constructor() { this.apply(); }
  toggle() {
    this.dark.update(value => !value);
    try { globalThis.localStorage?.setItem('bagatale-theme', this.dark() ? 'dark' : 'light'); } catch { /* storage may be unavailable */ }
    this.apply();
  }
  private apply() { document.documentElement.classList.toggle('dark', this.dark()); }
  private readTheme() {
    try { return globalThis.localStorage?.getItem('bagatale-theme') === 'dark'; }
    catch { return false; }
  }
}
