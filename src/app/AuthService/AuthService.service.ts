import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

constructor() { }

isLoggedIn() {

  //deciding factor to login / not using Guard
  //return false;
  return true;
}

}
