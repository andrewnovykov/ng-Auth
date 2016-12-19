import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class UserService {
  private loggedIn = false;



  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('token');
  }

  error;

  login(login, password){



    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http
      .post(
        '/auth',
          'login='+login+'&password='+password+''  , { headers: headers }
      )
      .map( res => res.json() ).map((res) => {

          err => this.logError(err)
          localStorage.setItem('token', res.token);
          localStorage.setItem('login', res.login);
          this.loggedIn = true;

          return res.success;
      })
  }

  logError(err: any) {
        console.log(err);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('login');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }



}
