import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      const  api = [
    'http://localhost:8000/rest-auth/registration/',
     'http://localhost:8000/rest-auth/login/',
];

      const lang = localStorage.getItem('lang') || 'en';
      if (request.url.indexOf('http://localhost:8000/rest-auth/registration/') === 0){
             return next.handle(request);
          }
      if (request.url.indexOf('http://localhost:8000/rest-auth/login/' ) === 0){
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
