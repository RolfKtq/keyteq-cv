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
    console.log('signinUser: ' + email);
    return this.signInWithEmailAndPassword(email, password)
      .subscribe(
        response => {
          /*
          console.log('signin 1 ');

          this.getRollene().subscribe(
            resp => {
              for (let i = 0; i < resp.data.length; i++) {
                localStorage.setItem(resp.data[i], '');
              }
              this.router.navigate(['./home']);
            });

*/
          //  this.router.navigate(['./home']);
        }
        ,
        (error) => {
          console.log('signin 2 ');
          console.log(error);
        }
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
        // this will return user data from google. What you need is a user token which you will send it to the server
        // this.sendToRestApiMethod(userData.idToken);
        // alert(userData.idToken);
        // this.router.navigate(['./kandidater']);
        // return this.signinUser(userData.email, '');

        // ['grant_type' => 'password','client_id' => 2,
        // 'client_secret' => 'I9lB7tRBZen69dsSA8Xk3SCShi47uOWrcGr3Xfts',
        return this.signinUser('test@test.no', 'secret');
      }
    );
  }
  /*
    sendToRestApiMethod(token: string): void {
      this.http.post('url to google login in your rest api', { token: token })
        .subscribe(onSuccess => {
          // login was successful
          // save the token that you got from your REST API in LocalStorage as you do with normal login
        }, onFail => {
          // login was unsuccessful
          // show an error message
        }
        );
    }
  */



  /*

         'client_id' => 'client-id',
          'redirect_uri' => 'http://example.com/callback',
          'response_type' => 'token',
          'scope' => '',
  */



  signInWithEmailAndPassword(email, pasword) {
    console.log('signInWithEmailAndPassword');
    const postData = {
      /*
      username: email,
      password: pasword,
      grant_type: 'password',
      client_id: '2',
      client_secret: 'I9lB7tRBZen69dsSA8Xk3SCShi47uOWrcGr3Xfts',


      client_id: '2',
      redirect_uri: 'http://localhost:4200',
      response_type: 'token',
      scope: '',

*/
      // console.log('signin til mitt api skjer her');
    };
    //   return this.http.post(this.lister.reqstring + 'oauth/token', postData, { headers: this.headers }).map(
    // tslint:disable-next-line:max-line-length
    // return this.http.get(this.lister.reqstring + 'oauth/authorize?client_id=2&redirect_uri=http://localhost:4200&response_type=token&scope=').map(
    return this.http.get(this.lister.reqstring + 'users').map(

      response => {
        /*
        const expDate = new Date();
        expDate.setSeconds(expDate.getSeconds() + response.json().expires_in);
        localStorage.setItem('t', response.json().access_token);
        localStorage.setItem('rt', response.json().refresh_token);

        this.token = response.json().access_token;
        localStorage.setItem('ts', '' + expDate.getTime());
        return response.json().access_token;
        */
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
