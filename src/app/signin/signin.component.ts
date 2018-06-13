import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Headers, Response, RequestOptions, Http, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';
import { Lister } from '../services/lister';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  token: string;
  private headers = new Headers();
  constructor(
    private socialAuthService: AuthService,
    private router: Router,
    private http: Http,
    private lister: Lister) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    localStorage.clear();
    const email = form.value.email;
    const password = form.value.password;
    return this.signinUser(email, password);
  }

  signinUser(email: string, password: string) {
    return this.signInWithEmailAndPassword(email, password)
      .subscribe(
        response => {
          this.getRollene().subscribe(
            resp => {
              for (let i = 0; i < resp.data.length; i++) {
                localStorage.setItem(resp.data[i], '');
              }
              this.router.navigate(['./home']);
            });
        }
        ,
        (error) => console.log(error)
      );
  }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ', userData);
        // Now sign-in with userData
        // ...
        // this.loggedIn = true;
        // alert(userData.email);
        return this.signinUser(userData.email, '');
      }
    );
  }


  signInWithEmailAndPassword(email, pasword) {
    const postData = {
      username: email,
      password: pasword,
    };
    return this.http.post(this.lister.reqstring + 'oauth/token', postData, { headers: this.headers }).map(
      response => {
        const expDate = new Date();
        expDate.setSeconds(expDate.getSeconds() + response.json().expires_in);
        localStorage.setItem('t', response.json().access_token);
        localStorage.setItem('rt', response.json().refresh_token);

        this.token = response.json().access_token;
        localStorage.setItem('ts', '' + expDate.getTime());
        return response.json().access_token;
      }).catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        });
  }



  getRollene() {
    // console.log('getRollene');
    return this.http.get(this.lister.reqstring + '/rollene', this.getOpts())
      .map(response => {
        //   console.log(response);

        return response.json();
      }).catch(
        (error: Response) => {
          return Observable.throw(error.json());
        }
      );
  }
  getOpts() {
    return new RequestOptions({
      headers: new Headers({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.getToken()
      })
    });
  }
  getToken() {
    return this.token;
  }

}
