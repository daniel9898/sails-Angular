import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user : any = {
    name : '',
    last_name : '',
    age : '',
    email: ''
  }

  constructor(public _user: UsuarioService) {
    this.getUsers();

  }

  async getUsers(){
    
     let users = await this._user.getAll('user').toPromise();
     console.log(users);
  }

  ngOnInit() {
  }

  createUser(){

  }

}
