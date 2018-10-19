import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from "@angular/router";

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

  constructor(public _user: UsuarioService,private router: Router) {}

  ngOnInit() {
  }

  async createUser(){
    try{
    	console.log(this.user);
    	let user_created = await this._user.save('user',this.user).toPromise();
    	console.log('user_created ',user_created);
    	this.router.navigate(['list']);

    }catch(e){
        console.log('ERROR EN createUser : ',e);
    }
  }

}
