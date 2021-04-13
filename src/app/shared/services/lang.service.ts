import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor( private translate: TranslateService,) { }

  changeLang(lang){

    localStorage.setItem('lang', lang);

    //window.location.reload();

    this.translate.use(lang);

  }
}
