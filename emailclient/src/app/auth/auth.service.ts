import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'

interface UsernameAvailableResponse{
  available:boolean;
}

interface SignupCredentials{
  username:string,
  password:string,
  passwordConfirmation:string
}

interface signupResponse{
  username:string
}

interface SignedinResponse{
  authenticated: boolean,
  username: string
}

interface SigninCredentials {
  username: string;
  password: string;
}

interface signinResponse{
  username:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

rootUrl='https://api.angular-email.com';
signedin$ = new BehaviorSubject(null);
username='';
 
  constructor(private http:HttpClient) { }
  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      this.rootUrl+`/auth/username`,
      {
        username
      }
    );
  }

  signup(Credentials:SignupCredentials){
      return this.http.post<signupResponse>(this.rootUrl+'/auth/signup',Credentials).pipe(
        tap(({username})=>{
          this.signedin$.next(true);
          this.username=username;
        })
      );
  }

  checkAuth() {
    return this.http
      .get<SignedinResponse>(this.rootUrl+`/auth/signedin`)
      .pipe(
        tap(({ authenticated,username }) => {
          this.signedin$.next(authenticated);
          this.username=username;
        })
      );
  }

  signout() {
    return this.http.post(this.rootUrl+`/auth/signout`, {}).pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }

  signin(credentials: SigninCredentials) {
    return this.http.post<signinResponse>(this.rootUrl+`/auth/signin`, credentials).pipe(
      tap(({username}) => {
        this.signedin$.next(true);
        this.username=username;
      })
    );
  }
  
}
 
