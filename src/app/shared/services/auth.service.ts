
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { User } from '../classes/user.model';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';



interface AuthResponseData {
  token: string;
  user: User1;
}

interface User1 {
  pk: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;


  constructor(private http: HttpClient , private router: Router) { }

  signup(email: string, password1: string, password2: string){
   return this.http.post<AuthResponseData>(`${environment.APIUrl}/rest-auth/registration/`, {
     email,
      password1,
      password2

    })
     .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.token,
            resData.user.email,
            resData.user.username,
          );
        })
      );

  }

  login( email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `${environment.APIUrl}/rest-auth/login/`,
        {
          email,
          password
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.token,
            resData.user.email,
            resData.user.username,

          );
        })
      );
  }

   autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
        console.log(new Date(userData._tokenExpirationDate).getTime())
        console.log(new Date().getTime())
        console.log(expirationDuration)
      this.autoLogout(expirationDuration);
    }
  }

logout() {
    this.user.next(null);
    this.router.navigate(['/']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

   autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    token: string,
    email: string,
    username: string,

  ) {

    const token_parts = token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    const expirationDate = new Date(token_decoded.exp * 1000);
    const user = new User(email, username, token, expirationDate);
    this.user.next(user);
    this.autoLogout(token_decoded.exp);
    localStorage.setItem('userData', JSON.stringify(user));
  }


  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error ) {
      return throwError(errorMessage);
    }
    if (errorRes.error.email) {

        errorMessage = errorRes.error.email[0];

    }
    if (errorRes.error.password){
        errorMessage = errorRes.error.password[0];

      }
    return throwError(errorMessage);
  }
}
