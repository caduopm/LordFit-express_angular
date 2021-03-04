import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:3000/users')
    // return this.http.get('https://reqres.in/api/users')
  }

  getUsersWorckout() {
    // console.log('servise')
    // console.log('http://localhost:3000/users/worckout');
    return this.http.get('http://localhost:3000/users/worckout')
  }

  getWorckouts() {
    return this.http.get('http://localhost:3000/users/worckoutList')
  }

  login(user: string, senha: string) {
    // return this.http.post('http://localhost:3000/users/post', {usuario: user, senha: senha})
    return user === 'admin' && senha === 'admin' ? true : false;
  }


}
