import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { VideosComponent } from './pages/videos/videos';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Bagatale Productions' },
  { path: 'about', component: AboutComponent, title: 'About — Bagatale Productions' },
  { path: 'videos', component: VideosComponent, title: 'Videos — Bagatale Productions' },
  { path: 'contact', component: ContactComponent, title: 'Contact — Bagatale Productions' },
  { path: '**', redirectTo: '' }
];
