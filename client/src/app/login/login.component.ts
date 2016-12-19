import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginService: UserService ) {
    console.log(this.loginService.isLoggedIn());
    //this.loginService.login( 'login', 'password' ).subscribe( )
  }

  onSubmit(login, password) {

    this.loginService.login(login, password).subscribe((result) => {

      //console.log(result);
    });


  }


  ngOnInit() {
  }

}
