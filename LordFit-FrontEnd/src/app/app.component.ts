import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'LordFit';
  public loginAllowed: boolean;
  public loginBloqueado: boolean;
  public showCadastrarScreen: boolean;
  public user: string;
  public senha: string;

  constructor(
    private DataService: DataService
    ) {
    this.loginAllowed = false;
    this.loginBloqueado = false;
    this.showCadastrarScreen = false;
    
  }

  login() {
    if (this.DataService.login(this.user, this.senha)) {
      this.loginAllowed = true;
    } else {
      this.user = "";
      this.senha = "";
      this.loginAllowed = false;
      this.loginBloqueado = true;
      setTimeout(() => {
        this.loginBloqueado = false;
      }, 3000);
    }
  }

  showCadastrar() {
    this.showCadastrarScreen = true;
  }

  cadastrar() {
    this.showCadastrarScreen = false;
  }
}
