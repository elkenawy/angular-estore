import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{


      const lang = localStorage.getItem('lang') || 'en';
      if (request.url.indexOf(`${environment.APIUrl}/rest-auth/registration/`) === 0){
             return next.handle(request);
          }
      if (request.url.indexOf(`${environment.APIUrl}/rest-auth/login/`) === 0){
             return next.handle(request);
          }
          else{
                request = request.clone({
            setParams: {
                locale: lang
            }
        });
          }


      return next.handle(request);
    }

}
