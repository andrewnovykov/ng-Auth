import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TaskService {

  // token = localStorage.getItem('token')

  constructor(private http: Http ) {



  }


  getTasks( ){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let authToken = localStorage.getItem('token');
    headers.append('Authorization', `${authToken}`);

    return this.http.get('/api', {headers: headers } ).map(res => res.json());
  }

  // login(login, password) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //
  //   return this.http
  //     .post(
  //       '/auth',
  //         'login='+login+'&password='+password+''  , { headers }
  //     )
  //     .map(res => res.json())
  //     .map((res) => {
  //
  //         localStorage.setItem('token', res.token);
  //         localStorage.setItem('login', res.login);
  //
  //     });
  // }


}
