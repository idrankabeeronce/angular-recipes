import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: boolean;
  private currentObUser: User | null;

  constructor() { 
    this.currentUser = true;
    this.currentObUser = {
      name: 'Tom',
      img: ''
    }
  }

  public isAuth() {
    return !!this.currentUser;
  }

  public getUser() {
    return this.currentObUser ? this.currentObUser : null;
  }
}
