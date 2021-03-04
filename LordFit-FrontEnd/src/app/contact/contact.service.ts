import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  teste: string;

  constructor(private http: HttpClient) { }

  setString(teste: string){
    this.teste = teste;
  }

  getString(){
    return this.teste;
  }
}
