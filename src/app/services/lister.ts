import { Injectable } from '@angular/core';
@Injectable()
export class Lister {

  public reqstring = 'https://test.rj-web.no/public/';
  // public reqstring = 'http://ktapi.local/';

  public harRolle(rolle: string) {
    return localStorage.getItem(rolle) !== null;
  }
}
