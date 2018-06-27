import { Lister } from './services/lister';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


// import { AuthService } from './signin/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  Routes,
  RouterModule,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { LocationStrategy } from '@angular/common';
// import { GoogleLoginProvider } from 'angular5-social-login';


import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private lister: Lister,
    private socialAuthService: AuthService,
    private http: Http,
  ) { }

  ngOnInit() {
    this.router.navigate(['/kandidater']);
  }
  public socialSignIn(socialPlatform: string) {

    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ', userData);
        this.signinUser(userData);
      }
    );
  }

  signinUser(userData) {
  //  console.log('signinUser: ' + email);
    return this.signInWithEmailAndPassword(userData)
      .subscribe(
        response => {
          console.log('testestet: ' + JSON.stringify(response));
        }
        ,
        (error) => {
          console.log('signin 2 ');
          console.log(error);
        }
      );
  }

  signInWithEmailAndPassword(userData) {
    return this.http.post(this.lister.reqstring + 'login', userData).map(
      // response => {
      // console.log('signInWithEmailAndPassword');
      // return this.http.get(this.lister.reqstring + 'login').map(
      response => {
        return response;
      }).catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        });
  }
}
